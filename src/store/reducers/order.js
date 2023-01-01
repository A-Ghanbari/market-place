import { createReducer } from "@reduxjs/toolkit"

export const orderProductDeliveryList = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { ORDER_PRODUCT_DELIVERY_LIST: (state, { payload }) => payload }
)

export const orderDeliveryList = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { ORDER_DELIVERY_LIST: (state, { payload }) => payload }
)