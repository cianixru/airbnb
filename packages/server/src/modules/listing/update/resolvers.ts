import { ResolverMap } from '../../../types/graphql-utils'
import { Listing } from '../../../entity/Listing'
import { processUpload } from '../shared/processUpload'
import { getConnection } from 'typeorm'
import { listingCacheKey } from '../../../constants'

export const resolvers: ResolverMap = {
  Mutation: {
    updateListing: async (
      _,
      { listingId, input: { picture, ...data } },
      { redis }
    ) => {
      // isAuthenticated(session);
      // const pictureUrl = picture ? await processUpload(picture) : null

      if (picture) {
        data.pictureUrl = await processUpload(picture)
      }

      const {
        raw: [updatedListing]
      } = await getConnection()
        .createQueryBuilder()
        .update(Listing)
        .set(data)
        .where('id = :id', { id: listingId })
        .returning('*')
        .execute()

      console.log(updatedListing)
      const listings = await redis.lrange(listingCacheKey, 0, -1)
      const index = listings.findIndex(
        (x: string) => JSON.parse(x).id === listingId
      )
      await redis.lset(listingCacheKey, index, JSON.stringify(updatedListing))

      return true
    }
  }
}
