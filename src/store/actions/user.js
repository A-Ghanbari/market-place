import { createAction } from "@reduxjs/toolkit"
import {
    USER as entity
} from "tools/utils/entities"

import { loginRequest, postRequest } from "tools/requests"
import API_SERVICES from "tools/shared/apis"
import { removeBrands, removeGroups, removeUser } from "tools/utils"
import { getBrandsList, getGroupsList } from "./cache"


export const setCollapsedMenu = createAction('USER_COLLAPSED_MENU')

export const login = (data) => {
    loginRequest({ entity, data, url: API_SERVICES.auth.login }).then(() => {
        getGroupsList("allCategories=true")
        getBrandsList("allBrands=true")
    })
}


export function logout() {
    return function (dispatch) {
        removeUser()
        removeBrands()
        removeGroups()
        dispatch({
            type: entity.upperName,
            payload: {
                isLogin: false,
                isLoading: false
            },
        })
    }
}

export const forgetPassword = (data) =>
    postRequest({ data, url: API_SERVICES.auth.forgetPassword })

export const changePassword = (data) =>
    postRequest({ data, url: API_SERVICES.auth.changePassword })

export const initialRegistration = (data) =>
    postRequest({ data, url: API_SERVICES.auth.initialRegistration })

export const checkValidationCode = (data) =>
    loginRequest({ entity, data, url: API_SERVICES.auth.checkValidationCode })

export const sendAgainValidationCode = (data) =>
    postRequest({ data, url: API_SERVICES.auth.sendAgainValidationCode })

export const realRegistrationUser = (data) =>
    postRequest({ data, url: API_SERVICES.auth.registerRealUser })

export const registerLegalUser = (data) =>
    postRequest({ data, url: API_SERVICES.auth.registerLegalUser })

export const confirmRules = (data) =>
    postRequest({ data, url: API_SERVICES.auth.confirmRules })