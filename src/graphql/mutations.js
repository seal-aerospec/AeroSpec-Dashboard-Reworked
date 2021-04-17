/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSensorData = /* GraphQL */ `
  mutation CreateSensorData(
    $input: CreateSensorDataInput!
    $condition: ModelSensorDataConditionInput
  ) {
    createSensorData(input: $input, condition: $condition) {
      id
      testDataX
      testDataY
      createdAt
      updatedAt
    }
  }
`;
export const updateSensorData = /* GraphQL */ `
  mutation UpdateSensorData(
    $input: UpdateSensorDataInput!
    $condition: ModelSensorDataConditionInput
  ) {
    updateSensorData(input: $input, condition: $condition) {
      id
      testDataX
      testDataY
      createdAt
      updatedAt
    }
  }
`;
export const deleteSensorData = /* GraphQL */ `
  mutation DeleteSensorData(
    $input: DeleteSensorDataInput!
    $condition: ModelSensorDataConditionInput
  ) {
    deleteSensorData(input: $input, condition: $condition) {
      id
      testDataX
      testDataY
      createdAt
      updatedAt
    }
  }
`;
