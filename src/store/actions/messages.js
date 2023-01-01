import { getListRequest, postRequest } from "tools/requests"
import API_SERVICES from "tools/shared/apis"
import {
    USER_MESSAGES_LIST as entity,
} from 'tools/utils/entities'

export const getUserMessagesList = (data) =>
    getListRequest({ entity: entity, url: API_SERVICES.messages.list + data })

export const setSeenUserMessage = (data) =>
    postRequest({ data, url: API_SERVICES.messages.answer })