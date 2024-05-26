import {AxiosRequestConfig} from 'axios';

// Штука для проверки ответа с сервера. В случае чего выдает ошибку
export const checkNoDataException = (responseData) => {
    if (responseData === null || responseData === undefined) {
        throw new Error(responseData.error);
    }
};

// Компонент высшего порядка (hoc). Накидывает функционал авторизации на все нужные private запросы
export const withAcceesToken = (axiosRequestConfig: AxiosRequestConfig) => {
    const accessToken = localStorage.getItem('accessToken');
    
    if (!accessToken) {
        throw new Error('нет access token');
    }
    
    return {
        ...axiosRequestConfig,
        headers: {
            ...axiosRequestConfig.headers,
            authorization: `Bearer ${accessToken}`,
        }
    }
}