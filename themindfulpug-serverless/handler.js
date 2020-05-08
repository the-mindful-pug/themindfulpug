import { getClientsUsage, analyticsS3toDynamoDB } from './controllers/analytics'
import {
  getSurveyTemplates,
  createSurveyTemplate,
  updateSurveyTemplate,
  deleteSurveyTemplate
} from './controllers/surveys'
import {
  getGroups,
  createGroup,
  updateGroup,
  removeGroup
} from './controllers/groups'
import {
  createPayment,
  subscribe,
  unsubscribe,
  updateSubscription,
  cancelSubscription,
  paymentWebhook
} from './controllers/payments'

import authenticate from './auth'

export const analyticsS3toDynamoDBHandler = analyticsS3toDynamoDB
export const getClientsUsageHandler = getClientsUsage

export const getSurveyTemplatesHandler = getSurveyTemplates
export const createSurveyTemplateHandler = createSurveyTemplate
export const updateSurveyTemplateHandler = updateSurveyTemplate
export const deleteSurveyTemplateHandler = deleteSurveyTemplate

export const getGroupsHandler = getGroups
export const createGroupHandler = createGroup
export const updateGroupHandler = updateGroup
export const removeGroupHandler = removeGroup

export const createPaymentHandler = createPayment
export const subscribeHandler = subscribe
export const unsubscribeHandler = unsubscribe
export const updateSubscriptionHandler = updateSubscription
export const cancelSubscriptionHandler = cancelSubscription
export const paymentWebhookHandler = paymentWebhook

export const auth = authenticate
