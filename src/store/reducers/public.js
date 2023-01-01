import { createReducer } from "@reduxjs/toolkit"

export const provinceLists = createReducer([],
    {
        PROVINCE_LIST: (state, { payload }) =>
            payload.data.map((item) => ({
                text: item.name,
                value: item.id,
            }))
    }
)

export const postDDLBranches = createReducer([],
    {
        POST_DDL_BRANCHES: (state, { payload }) =>
            payload.dataList.map((item) => ({
                text: item.title,
                value: item.ID,
            }))
    }
)