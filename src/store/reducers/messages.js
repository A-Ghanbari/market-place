import { createReducer } from "@reduxjs/toolkit"

export const userMessagesList = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { USER_MESSAGES_LIST: (state, { payload }) => payload }
)