import React from 'react'
import { Card } from 'antd'
import { withFindListings, WithFindListings } from '@airbnb/controller'
import { Link } from 'react-router-dom'

const { Meta } = Card

export class C extends React.PureComponent<WithFindListings> {
  render() {
    const { listings, loading } = this.props
    return (
      <div>
        {loading && <div>...loading</div>}
        {listings.map(l => (
          <Card
            key={`${l.id}-card`}
            hoverable={true}
            style={{ width: 240 }}
            cover={l.pictureUrl && <img alt="" src={l.pictureUrl} />}
          >
            <Link to={`/listing/${l.id}`}>
              <Meta title={l.name} description={l.description} />
            </Link>
          </Card>
        ))}
      </div>
    )
  }
}

export const FindListingsConnector = withFindListings(C)
