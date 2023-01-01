import { createReducer } from "@reduxjs/toolkit"

export const productList = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { PRODUCT_LIST: (state, { payload }) => payload }
)
export const productAttributesList = createReducer(
    { data: [], loading: false },
    { PRODUCT_ATTRIBUTES_LIST: (state, { payload }) => payload }
)
export const productSupplierSalesList = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { PRODUCT_SUPPLIER_SALES_LIST: (state, { payload }) => payload }
)
export const productColorsList = createReducer(
    { data: [], loading: false },
    { PRODUCT_COLORS_LIST: (state, { payload }) => payload }
)
export const productGuaranteeList = createReducer(
    { data: [], loading: false },
    { PRODUCT_GUARANTEE_LIST: (state, { payload }) => payload }
)