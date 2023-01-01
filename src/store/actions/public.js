import API_SERVICES from 'tools/shared/apis'
import request, { getRequest } from 'tools/requests'
import {
    PROVINCE_LIST as provinceEntity
} from "tools/utils/entities"

export const getProvinceList = () =>
    getRequest({ entity: provinceEntity, url: API_SERVICES.public.provinces })

export const getCitiesList = ({ ID }) =>
    request({ method: "GET", url: `${API_SERVICES.public.provinces}?provinceID=${ID}` })