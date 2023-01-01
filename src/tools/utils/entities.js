import _ from "lodash";
import pluralize from "pluralize";

export function getEntityMeta(name) {
    const upperName = _.snakeCase(name).toUpperCase();
    const pluralizeName = pluralize(name);
    const pluralizeUpperName = _.snakeCase(pluralizeName).toUpperCase();
    const routeName = _.kebabCase(name);

    return { name, upperName, pluralizeName, pluralizeUpperName, routeName };
}

export const USER = getEntityMeta("user")

export const PROVINCE_LIST = getEntityMeta("provinceList")

export const USER_BASIC_INFO = getEntityMeta("userBasicInfo")
export const USER_BANK_INFO = getEntityMeta("userBankInfo")
export const USER_ADDRESS_INFO = getEntityMeta("userAddressInfo")
export const USER_DOCUMENT_INFO = getEntityMeta("userDocumentInfo")
export const USER_CALENDER_INFO = getEntityMeta("userCalenderInfo")

export const ORDER_DELIVERY_LIST = getEntityMeta("orderDeliveryList")
export const ORDER_PRODUCT_DELIVERY_LIST = getEntityMeta("orderProductDeliveryList")

export const USER_MESSAGES_LIST = getEntityMeta("userMessagesList")

export const PRODUCT_GROUP_LIST = getEntityMeta("productGroupList")
export const PRODUCT_BRANDS_LIST = getEntityMeta("productBrandsList")
export const PRODUCT_LIST = getEntityMeta("productList")
export const PRODUCT_ATTRIBUTES_LIST = getEntityMeta("productAttributesList")
export const PRODUCT_CREATE = getEntityMeta("createProduct")
export const PRODUCT_SUPPLIER_SALES_LIST = getEntityMeta("productSupplierSalesList")
export const PRODUCT_COLORS_LIST = getEntityMeta("productColorsList") 
export const PRODUCT_GUARANTEE_LIST = getEntityMeta("productGuaranteeList")
