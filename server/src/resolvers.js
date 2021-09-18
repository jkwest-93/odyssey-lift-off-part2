/**
 * Our resolvers object's keys wil correspond to our schema's types and fields
 * As best practice, when working on your resolver functions, keep them as thin as possible.
 */
const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    /**
     *
     * @param parent returned value of resolver for this field's parent
     * @param args object that contains all GraphQL arguments that were provided for the field by the GraphQL operation
     * @param context an object shared across all resolvers that are executing for a particular operation. The resolver needs this context argument to share state, like authentication information, a database connection, or a RESTDataSource
     * @param info contains information about the operation's execution state, including the field name, the path to the field from the root, and more
     */
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackApi.getTracksForHome();
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackApi.getAuthor(authorId);
    },
  },
};

module.exports = resolvers;
