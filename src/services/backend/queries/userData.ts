import { getPrivateData, postPrivateData, postPublicData } from "."

export const getCurrUserData = async () => {
  return await getPrivateData('/me');
}

export const refreshAccessToken = async (refresh) => {
  return await postPrivateData('/token/refresh/', {refresh});
}

export const queryLogIn = async (data) => {
  return await postPublicData('/login', data)
}

export const queryRegister = async (data) => {
  return await postPublicData('/register', data)
}