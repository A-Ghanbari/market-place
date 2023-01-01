import axios from "axios";
import { dispatch, getState } from "store";
import Notification from "components/utils/notification";
import { API_BASE_URL, TOKEN_NAME } from "tools/shared/constants";
import { cacheData, cacheUser, getToken, setToken } from "tools/utils";

axios.defaults.data = {};
axios.defaults.form = {};
axios.defaults.headers.common.Accept = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers.common[TOKEN_NAME] = getToken();

function requestMessage(response, display = true) {
    if (!display) return

    if (response?.status >= 500) {
        Notification.error("درخواست با خطا مواجه شد")
        return
    }

    if (response?.status === 401) {
        Notification.error("نام کاربری یا رمز عبور اشتباه میباشد.")
        return
    }

    if (response.data.exceptionID !== 0) {
        const message = response.data.exceptionMessage
            ? response.data.exceptionMessage
            : "درخواست با خطا مواجه شد."
        Notification.error(message)
        return
    }

    if (response.data.exceptionID === 0) {
        const message = response.data.data.message
            ? response.data.data.message
            : "درخواست با موفقیت انجام شد."
        Notification.success(message)
        return
    }
}

const requestInstance = axios.create();
requestInstance.interceptors.request.use(
    (config) => {
        config.headers[TOKEN_NAME] = getToken();
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
requestInstance.interceptors.response.use(
    (response) => {
        requestMessage(response);
        return response.data;
    },
    (error) => {
        requestMessage(error.response);
        return Promise.reject(error);
    }
);
const request = requestInstance;
export default request;

/**
 * Download File
 */
const downloadFileInstance = axios.create();
downloadFileInstance.interceptors.request.use(
    (config) => {
        config.headers[TOKEN_NAME] = getToken();
        config.responseType = "blob";
        return config;
    },
    (error) => Promise.reject(error)
);
downloadFileInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        requestMessage(error.response);
        return Promise.reject(error);
    }
);
export const download = downloadFileInstance;

/**
 * LIST API 
 */
const listInstance = axios.create({ method: "POST" });
listInstance.interceptors.request.use(
    (config) => {
        config.headers[TOKEN_NAME] = getToken();
        dispatch({
            type: config.entity.pluralizeUpperName,
            payload: {
                dataList: [],
                ...getState()[config.entity.pluralizeName],
                loading: true,
            },
        });
        return config;
    },
    (error) => Promise.reject(error)
);
listInstance.interceptors.response.use(
    (response) => {
        dispatch({
            type: response.config.entity.pluralizeUpperName,
            payload: { ...response.data.data, loading: false },
        });
        return response.data;
    },
    (error) => {
        requestMessage(error.response);
        return Promise.reject(error);
    }
);
export const list = listInstance;

/**
 * GET ITEM API 
 */
const itemInstance = axios.create({ method: "POST" });
itemInstance.interceptors.request.use(
    (config) => {
        config.headers[TOKEN_NAME] = getToken();
        dispatch({
            type: config.entity.upperName,
            payload: {
                data: {},
                loading: true,
            },
        });

        if (config.params) {
            if (config.params.history) {
                config.params = getState()["query"][config.entity.name];
            } else {
                // dispatch(setQuery(config.entity.name, config.params));
            }
        }

        return config;
    },
    (error) => Promise.reject(error)
);
itemInstance.interceptors.response.use(
    (response) => {
        dispatch({
            type: response.config.entity.upperName,
            payload: { data: response.data.data, loading: false },
        });
        return response.data
    },
    (error) => {
        requestMessage(error.response)
        return Promise.reject(error)
    }
);
export const item = itemInstance

/**
 * GET REQUEST API 
 */
const getRequestInstance = axios.create({ method: "GET" })
getRequestInstance.interceptors.request.use(
    (config) => {
        config.headers[TOKEN_NAME] = getToken()
        dispatch({
            type: config.entity.upperName,
            payload: {
                data: [],
                loading: true,
            },
        });
        return config
    },
    (error) => Promise.reject(error)
);
getRequestInstance.interceptors.response.use(
    (response) => {
        dispatch({
            type: response.config.entity.upperName,
            payload: { data: response.data.data, loading: false },
        });
        return response.data
    },
    (error) => {
        requestMessage(error.response)
        return Promise.reject(error)
    }
);
export const getRequest = getRequestInstance

/**
 * GET LIST REQUEST API 
 */
const getListRequestInstance = axios.create({ method: "GET" })
getListRequestInstance.interceptors.request.use(
    (config) => {
        config.headers[TOKEN_NAME] = getToken()
        dispatch({
            type: config.entity.upperName,
            payload: {
                dataList: [],
                ...getState()[config.entity.name],
                loading: true,
            },
        })
        return config
    },
    (error) => Promise.reject(error)
);
getListRequestInstance.interceptors.response.use(
    (response) => {
        dispatch({
            type: response.config.entity.upperName,
            payload: { ...response.data.data, loading: false },
        });
        return response.data
    },
    (error) => {
        requestMessage(error.response)
        return Promise.reject(error)
    }
);
export const getListRequest = getListRequestInstance

/**
* POST REQUEST API 
*/
const postRequestInstance = axios.create({ method: "POST" })
postRequestInstance.interceptors.request.use(
    (config) => {
        config.headers[TOKEN_NAME] = getToken()
        return config
    },
    (error) => Promise.reject(error)
)
postRequestInstance.interceptors.response.use(
    (response) => {
        requestMessage(response)
        return response.data
    },
    (error) => {
        requestMessage(error.response)
        return Promise.reject(error)
    }
);
export const postRequest = postRequestInstance

/*
cache request API 
*/

const cacheRequestInstance = axios.create({ method: "GET" })
cacheRequestInstance.interceptors.request.use(
    (config) => {
        config.headers[TOKEN_NAME] = getToken()
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
cacheRequestInstance.interceptors.response.use(
    (response) => {
        dispatch({
            type: response.config.entity.pluralizeUpperName,
            payload: cacheData(response.data.data, response.config.name),
        })
        return response.data
    },
    (error) => {
        requestMessage(error.response, false)
        return Promise.reject(error)
    }
)
export const cacheRequest = cacheRequestInstance


/**
 * Login Request 
 */
const loginInstance = axios.create({ method: "POST" })
loginInstance.interceptors.request.use(
    (config) => {
        dispatch({
            type: config.entity.upperName,
            payload: {
                ...getState()[config.entity.name],
                isLogin: false,
                isLoading: true
            },
        });
        return config
    },
    (error) => Promise.reject(error)
);

loginInstance.interceptors.response.use(
    (response) => {
        if (response.data.exceptionID === 0) {
            if (response.data.data.registerStatus === 4) {
                setToken(response.data.data.token)
                cacheUser(response.data.data)
                dispatch({
                    type: response.config.entity.upperName,
                    payload: {
                        data: { ...response.data.data },
                        isLogin: true,
                        isLoading: false
                    },
                })
            } else {
                setToken(response.data.data.token)
                dispatch({
                    type: response.config.entity.upperName,
                    payload: {
                        isLogin: false,
                        isLoading: false
                    },
                })
            }
            requestMessage(response)
            return response.data.data

        } else {
            dispatch({
                type: response.config.entity.upperName,
                payload: {
                    isLogin: false,
                    isLoading: false
                },
            })
            requestMessage(response)
            return null
        }
    },
    (error) => {
        requestMessage(error.response)
        return Promise.reject(error)
    }
);
export const loginRequest = loginInstance