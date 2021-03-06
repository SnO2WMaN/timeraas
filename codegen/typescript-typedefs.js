const {printSchema} = require('graphql');

module.exports = {
  plugin: (schema) => {
    return `
      import gql from "graphql-tag";
      export const typeDefs = gql\`${printSchema(schema)}\`
    `;
  },
};
