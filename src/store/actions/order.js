import { getListRequest, postRequest } from "tools/requests"
import API_SERVICES from "tools/shared/apis"
import {
    ORDER_PRODUCT_DELIVERY_LIST as orderProductEntity,
    ORDER_DELIVERY_LIST as orderEntity,
} from 'tools/utils/entities'

export const getConfirmedOrderProductList = (data) =>
    getListRequest({ entity: orderProductEntity, url: API_SERVICES.orders.confirm.listProduct + data })

export const getConfirmedOrderList = (data) =>
    getListRequest({ entity: orderEntity, url: API_SERVICES.orders.confirm.listOrder + data })

export const exportOrderDeliveredToEmail = (data) =>
    postRequest({ data, entity: orderEntity, url: API_SERVICES.orders.confirm.exportExcel })