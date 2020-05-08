import crypto from 'crypto'
import logger from './logger'

const algorithm = process.env.ALGORITHM
const password = process.env.PASSWORD
const salt = process.env.SALT
const iv = Buffer.alloc(16, 0)

const g_password = process.env.G_PASSWORD

export const getHash = (password, salt) => {
  logger.info('crypto:getHash', { msg: 'Hashing password...' })
  if (!salt) salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto
    .pbkdf2Sync(password, salt, 100000, 64, 'sha512')
    .toString('hex')
  logger.info('crypto:getHash', { msg: 'Done' })
  return { hash, salt }
}

export const encryptThought = thought => {
  logger.info('crypto:encryptThought', { msg: 'Encrypting thought...' })
  const key = crypto.scryptSync(password, salt, 32)
  const cipher = crypto.createCipheriv(algorithm, key, iv)

  let encrypted = cipher.update(thought, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  logger.info('crypto:encryptThought', { msg: 'Done' })
  return encrypted
}

export const decryptThought = encryptedThought => {
  logger.info('crypto:decryptThought', { msg: 'Decrypting thought...' })
  const key = crypto.scryptSync(password, salt, 32)
  const decipher = crypto.createDecipheriv(algorithm, key, iv)

  let decrypted = decipher.update(encryptedThought, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  logger.info('crypto:decryptThought', { msg: 'Done' })
  return decrypted
}

export const encrypt = value => {
  logger.info('crypto:encrypt', { msg: 'Encrypting...' })
  const key = crypto.scryptSync(g_password, salt, 32)
  const cipher = crypto.createCipheriv(algorithm, key, iv)

  let encrypted = cipher.update(value, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  logger.info('crypto:encrypt', { msg: 'Done' })
  return encrypted
}

export const decrypt = encryptedValue => {
  logger.info('crypto:decrypt', { msg: 'Decrypting...' })
  const key = crypto.scryptSync(g_password, salt, 32)
  const decipher = crypto.createDecipheriv(algorithm, key, iv)

  let decrypted = decipher.update(encryptedValue, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  logger.info('crypto:decrypt', { msg: 'Done' })
  return decrypted
}

export const getDecryptedThoughts = thoughts =>
  thoughts.map(t => {
    const { id, thought, timestamp } = t
    return { id, timestamp, thought: decryptThought(thought) }
  })

export const getDecryptedSurveys = surveys =>
  surveys.map(t => {
    const { id, data, timestamp } = t
    return { id, timestamp, data: decryptThought(data) }
  })
