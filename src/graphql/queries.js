/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSensorData = /* GraphQL */ `
  query GetSensorData($id: ID!) {
    getSensorData(id: $id) {
      id
      testDataX
      testDataY
      createdAt
      updatedAt
    }
  }
`;
export const listSensorDatas = /* GraphQL */ `
  query ListSensorDatas(
    $filter: ModelSensorDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSensorDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        testDataX
        testDataY
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
