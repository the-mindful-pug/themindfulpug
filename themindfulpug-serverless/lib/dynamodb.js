import * as AWS from 'aws-sdk'

import * as analyticsComponent from './components/analytics'

const dynamoDb = new AWS.DynamoDB.DocumentClient()
const s3 = new AWS.S3({ apiVersion: '2006-03-01' })

export const getProviderDetails = async providerId => {
  const response = await dynamoDb
    .get({ TableName: 'providers', Key: { id: providerId } })
    .promise()
  return response.Item
}

/**
 * Analytics
 */
export const analyticsTable = {
  getClientsUsage: providerId =>
    analyticsComponent.getClientsUsage(dynamoDb, providerId)
}