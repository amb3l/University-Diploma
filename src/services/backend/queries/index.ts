import { AxiosRequestConfig } from "axios";
import axiosConfig from "..";
import { withAcceesToken, checkNoDataException } from "../utils";

export const customFetch = async (method, resource, data, isPrivate) => {
  try {
    const baseRequestConfig = {
      method,
      url: `/api${resource}`,
      data,
    }
    
    const requestConfig: AxiosRequestConfig =
        isPrivate ?
        withAcceesToken(baseRequestConfig) :
        baseRequestConfig;
    
    const response = await axiosConfig(requestConfig);
    checkNoDataException(response.data);
      
    return response.data
  } catch (error) {
    // alert(error)
    throw error
  }
}

export const getPrivateData = async (resource) => {
  return await customFetch('GET', resource, undefined, true)
}

export const postPrivateData = async (resource, data) => {
  return await customFetch('POST', resource, data, true)
}

export const postPublicData = async (resource, data) => {
  return await customFetch('POST', resource, data, false)
}