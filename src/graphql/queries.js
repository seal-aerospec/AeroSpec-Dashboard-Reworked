/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSchemaNew = /* GraphQL */ `
  query GetSchemaNew($id: ID!, $time: String!) {
    getSchemaNew(id: $id, time: $time) {
      id
      Battery
      date
      Env_PM_smaller_than_1_0
      Env_PM_smaller_than_10
      Env_PM_smaller_than_2_5
      equiv_CO2_ppm
      Latitude
      Longitude
      Particle_Count_0_3um
      PC_0_5um
      PC_1_0num
      PC_10um
      PC_2_5um
      PC_5um
      Relative_Humidity
      Temperature_c
      time
      total_VoC_ppb
      Wifi_Strength
    }
  }
`;
export const listSchemaNews = /* GraphQL */ `
  query ListSchemaNews(
    $id: ID
    $time: ModelStringKeyConditionInput
    $filter: ModelschemaNewFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSchemaNews(
      id: $id
      time: $time
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        Battery
        date
        Env_PM_smaller_than_1_0
        Env_PM_smaller_than_10
        Env_PM_smaller_than_2_5
        equiv_CO2_ppm
        Latitude
        Longitude
        Particle_Count_0_3um
        PC_0_5um
        PC_1_0num
        PC_10um
        PC_2_5um
        PC_5um
        Relative_Humidity
        Temperature_c
        time
        total_VoC_ppb
        Wifi_Strength
      }
      nextToken
    }
  }
`;
