import config from '../config/configBookstore'

const newUser = async () => {
  const response = await fetch(`${config.baseURL}/User`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userName: config.username,
      password: config.password
  })
})
  return {
    //headers: response.heders,
    status: response.status,
    data: await response.json()
  }
}

const authorized = async () => {
  const response2 = await fetch(`${config.baseURL}/Authorized`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    userName: config.username,
    password: config.password
  })
})
return {
  //headers: response.heders,
  status: response.status,
  data: await response.json()
}
}

const userFails = async () => {
  const response3 = await fetch(`${config.baseURL}/a351857e-5358-4d44-a8f7-c78550c1b513`)
}
return {
  //headers: response.heders,
  status: response.status,
  data: await response.json()
}

const userDelete = async () => {
  const response3 = await fetch(`${config.baseURL}/User`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userName: config.username,
      password: config.password
  })
})
return {
  //headers: response.heders,
  status: response.status,
  data: await response.json()
}
}

export default {
  newUser,
  authorized,
  userFails,
  userDelete
}
