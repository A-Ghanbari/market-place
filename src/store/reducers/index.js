import { combineReducers } from "@reduxjs/toolkit"
import { user, collapsedMenu } from "store/reducers/user"
import { provinceLists } from "store/reducers/public"
import { userBasicInfo, userBankInfo, userAddressInfo, userDocumentInfo, userCalenderInfo } from "store/reducers/profile"
import { orderProductDeliveryList, orderDeliveryList } from "store/reducers/order"
import { userMessagesList } from "store/reducers/messages"
import { productAttributesList, productList, productSupplierSalesList, productColorsList, productGuaranteeList } from "store/reducers/product"
import { productBrandLists, productGroupLists } from "store/reducers/cache"

const reducer = combineReducers({
    user,
    collapsedMenu,
    provinceLists,
    userBasicInfo,
    userBankInfo,
    userAddressInfo,
    userDocumentInfo,
    userCalenderInfo,
    orderProductDeliveryList,
    orderDeliveryList,
    userMessagesList,
    productAttributesList,
    productBrandLists,
    productGroupLists,
    productList,
    productSupplierSalesList,
    productColorsList,
    productGuaranteeList
})

export default reducer