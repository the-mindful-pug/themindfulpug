import util from 'util'
import zlib from 'zlib'
import { uuid } from 'uuidv4'

import logger from '../logger'

const gunzip = util.promisify(zlib.gunzip)

export const getClientsUsage = async (dynamoDb, providerId) => {
  logger.info('dynamodb:analytics:getClientsUsage', {
    msg: `Getting connections for ${providerId}`
  })
  const response = await dynamoDb
    .get({ TableName: 'connections', Key: { providerId } })
    .promise()
  const { connections } = response.Item

  if (!connections) {
    logger.info('dynamodb:analytics:getClientsUsage', {
      msg: `No connections`
    })
    return {}
  }

  logger.info('dynamodb:analytics:getClientsUsage', {
    msg: `Parsing connections`
  })
  const parsedConnections = JSON.parse(connections)

  logger.info('dynamodb:analytics:getClientsUsage', {
    msg: `Getting analytics`
  })
  const end = Date.now() + ''
  const start = +end - 7 * 24 * 60 * 60 * 1000 + ''
  const analytics = await dynamoDb
    .query({
      TableName: 'analytics',
      IndexName: 'event-timestamp-index',
      KeyConditionExpression:
        'event = :event and #timestamp between :start and :end',
      ExpressionAttributeNames: {
        '#timestamp': 'timestamp'
      },
      ExpressionAttributeValues: {
        ':event': 'identify',
        ':start': start,
        ':end': end
      }
    })
    .promise()

  logger.info('dynamodb:analytics:getClientsUsage', {
    msg: `Parsing analytics`
  })
  const identifiedUsers = analytics.Items.map(e => {
    try {
      return {
        id: JSON.parse(e.data).traits.userId,
        timestamp: e.timestamp
      }
    } catch (err) {
      logger.error('dynamodb:analytics:getClientsUsage', {
        msg: `Failed parsing event`,
        err
      })
    }
  })

  logger.info('dynamodb:analytics:getClientsUsage', {
    msg: `Checking for matches`
  })
  const usageCounts = identifiedUsers.reduce((acc, cur) => {
    if (parsedConnections.includes(cur.id)) {
      acc[cur.id] = acc[cur.id] || 0
      acc[cur.id] += 1
    }
    return acc
  }, {})

  return usageCounts
}