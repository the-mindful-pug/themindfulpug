import logger from '../lib/logger'
import { analyticsTable } from '../lib/dynamodb'

export const getClientsUsage = async event => {
  const res = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    }
  }
  const { providerId } = event.pathParameters

  try {
    const usageCounts = await analyticsTable.getClientsUsage(providerId)
    const usageArr = Object.values(usageCounts)
    const avgUsageWeek =
      usageArr.reduce((a, c) => {
        a += c
        return a
      }, 0) / (usageArr.length || 1)
    const avgUsageDay = avgUsageWeek / 7
    logger.info('analytics:getClientsUsage', {
      msg: 'Sending back 200 response'
    })
    res.statusCode = 200
    res.body = JSON.stringify({ usageCounts, avgUsageWeek, avgUsageDay })
  } catch (err) {
    logger.error('analytics:getClientsUsage', {
      msg: 'Sending back 500 response',
      err: err.message
    })
    res.statusCode = 500
    res.body = JSON.stringify({ err: err.message })
  }

  return res
}
