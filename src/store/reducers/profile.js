import { createReducer } from "@reduxjs/toolkit"

export const userBasicInfo = createReducer(
    { data: [] },
    { USER_BASIC_INFO: (state, { payload }) => payload }
)

export const userBankInfo = createReducer(
    { data: [] },
    { USER_BANK_INFO: (state, { payload }) => payload }
)

export const userAddressInfo = createReducer(
    { data: [] },
    { USER_ADDRESS_INFO: (state, { payload }) => payload }
)

export const userDocumentInfo = createReducer(
    { data: [] },
    { USER_DOCUMENT_INFO: (state, { payload }) => payload }
)

export const userCalenderInfo = createReducer(
    { data: [] },
    { USER_CALENDER_INFO: (state, { payload }) => payload }
)