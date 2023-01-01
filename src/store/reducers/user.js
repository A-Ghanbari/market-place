import { createReducer } from "@reduxjs/toolkit"
import { getLoginStatus, getUser } from "tools/utils"

export const user = createReducer(
    {
        isLoading: false,
        isLogin: getLoginStatus(),
        data: getUser()
    },
    { USER: (state, { payload }) => payload }
)

export const collapsedMenu = createReducer(false, {
    USER_COLLAPSED_MENU: (state, { payload }) => payload
}) 
