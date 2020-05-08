const SERVER_URL = 'https://mylifechart-server.herokuapp.com'
const AWS_URL = 'https://.execute-api.us-east-1.amazonaws.com/prod'

const getOptions = {
  headers: {
    'x-auth': '9aedb3a56f894fcf8e80-b48348460712'
  }
}

export const tokenIsValid = async (token: string | null) => {
  const resp = await fetch(
    `${SERVER_URL}/user/check?token=${token}`,
    getOptions
  )
  const data = await resp.json()
  console.log(data)
  return data
}

export const resetPassword = async (user: object, password: string) => {
  try {
    const { id, username, email }: any = user
    fetch(`${SERVER_URL}/create-account`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-auth': '9aedb3a56f894fcf8e80-b48348460712'
      },
      body: JSON.stringify({
        id,
        username,
        email,
        password,
        isPasswordReset: true
      })
    })
  } catch (e) {
    console.log(e)
  }
}

// ADMIN DATA ROUTES

export const getDataRequest = async () => {
  try {
    const resps = await Promise.all([
      getDBDataRequest,
      getStripeDataRequest,
      getSegmentDataRequest
    ])

    return resps.reduce((acc, cur) => {
      acc = { ...acc, ...cur }
      return acc
    }, {})
  } catch (e) {
    console.log(e)
    return {}
  }
}

export const getDBDataRequest = async () => {
  try {
    const resp = await fetch(`${AWS_URL}/data/db`, getOptions)

    if (resp.status !== 200) {
      throw Error(`Request responded with status ${resp.status}`)
    }

    const data = await resp.json()
    return data
  } catch (e) {
    console.log(e)
    return {}
  }
}

export const getStripeDataRequest = async () => {
  try {
    const resp = await fetch(`${AWS_URL}/data/stripe`, getOptions)

    if (resp.status !== 200) {
      throw Error(`Request responded with status ${resp.status}`)
    }

    const data = await resp.json()
    return data
  } catch (e) {
    console.log(e)
    return {}
  }
}

export const getSegmentDataRequest = async () => {
  try {
    const resp = await fetch(`${AWS_URL}/data/segment`, getOptions)

    if (resp.status !== 200) {
      throw Error(`Request responded with status ${resp.status}`)
    }

    const data = await resp.json()
    return data
  } catch (e) {
    console.log(e)
    return {}
  }
}
