"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../shared/constants");
const graphql_yoga_1 = require("graphql-yoga");
exports.resolvers = {
    Subscription: {
        newMessage: {
            subscribe: graphql_yoga_1.withFilter((_, __, { pubsub }) => pubsub.asyncIterator(constants_1.PUBSUB_NEW_MESSAGE), (payload, variables) => {
                return payload.newMessage.listingId === variables.listingId;
            })
        }
    }
};
//# sourceMappingURL=resolvers.js.map