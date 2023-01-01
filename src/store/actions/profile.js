import { getRequest, postRequest } from "tools/requests"
import API_SERVICES from "tools/shared/apis"
import {
    USER_BASIC_INFO as basicEntity,
    USER_BANK_INFO as bankEntity,
    USER_ADDRESS_INFO as addressEntity,
    USER_DOCUMENT_INFO as documentEntity,
    USER_CALENDER_INFO as calenderEntity,
} from 'tools/utils/entities'

export const getUserBasicInfo = (data) =>
    getRequest({ entity: basicEntity, url: API_SERVICES.profile.basic.list + data })

export const updateUserBasicInfo = (data) =>
    postRequest({ data, url: API_SERVICES.profile.basic.edit })

export const getUserBankInfo = (data) =>
    getRequest({ entity: bankEntity, url: API_SERVICES.profile.bank.list + data })

export const updateUserBankInfo = (data) =>
    postRequest({ data, url: API_SERVICES.profile.bank.edit })

export const getUserAddressInfo = (data) =>
    getRequest({ entity: addressEntity, url: API_SERVICES.profile.address.list + data })

export const addUserAddress = (data) =>
    postRequest({ data, url: API_SERVICES.profile.address.add })

export const updateUserAddress = (data) =>
    postRequest({ data, url: API_SERVICES.profile.address.edit })

export const deleteUserAddress = (data) =>
    postRequest({ data, url: API_SERVICES.profile.address.delete })

export const getUserDocumentInfo = (data) =>
    getRequest({ entity: documentEntity, url: API_SERVICES.profile.document.list + data })

export const sendDocuments = (data) =>
    postRequest({ data, url: API_SERVICES.profile.document.add })

export const deleteUserDocument = (data) =>
    postRequest({ data, url: API_SERVICES.profile.document.delete })

export const getUserCalenderInfo = (data) =>
    getRequest({ entity: calenderEntity, url: API_SERVICES.profile.calender.list + data })

export const createUserCalenderDay = (data) =>
    postRequest({ data, url: API_SERVICES.profile.calender.add })