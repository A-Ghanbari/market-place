import { createReducer } from "@reduxjs/toolkit"
// import { getBrandsList, getGroupsList } from "store/actions/cache"
import { getBrands, getGroups } from "tools/utils"

export const productBrandLists = createReducer(getBrands(),
    { BRAND_LISTS: (state, { payload }) => payload }
)

export const productGroupLists = createReducer(getGroups(),
    { GROUP_LISTS: (state, { payload }) => payload }
)

