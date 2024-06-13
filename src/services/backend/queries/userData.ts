import { getPrivateData, getPublicData, patchPrivateData, postPrivateData, postPublicData } from "."

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

export const queryGetOrdersList = async () => {
  return await getPrivateData('/orders')
}

export const queryGetUserById = async (id) => {
  return await getPublicData(`/users/${id}`)
}

export const queryGetUsersList = async () => {
  return await getPublicData('/users')
}

export const queryReceiveOrder = async (id) => {
  return await patchPrivateData(`/orders/${id}/receive`)
}

export const queryCancelOrder = async (id) => {
  return await patchPrivateData(`/orders/${id}/cancel`)
}

export const queryMakeOrder = async (data) => {
  return await postPrivateData('/orders/', data)
}