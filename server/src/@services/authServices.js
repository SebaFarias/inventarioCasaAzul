import { config } from '../config'

export const authServices = {
  login,
}

const login = async data => {
  const configure = {
    method : "POST",
    headers : {
      "Content-type": "application/json",
    },
    body : JSON.stringify(data)
  }
  const sendREquest = await fetch(config.apiRoute + 'user/login' , configure)
  const convertRequest = await sendREquest.json()
  return convertRequest
}

