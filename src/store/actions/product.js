import { getListRequest, getRequest, postRequest } from "tools/requests"
import API_SERVICES from "tools/shared/apis"
import { PRODUCT_LIST as productListEntities } from "tools/utils/entities"
import { PRODUCT_ATTRIBUTES_LIST as productAttributesEntities } from "tools/utils/entities"
import { PRODUCT_SUPPLIER_SALES_LIST as productSupplierSalesListEntities } from 'tools/utils/entities'
import { PRODUCT_COLORS_LIST as productColorsListEntities } from 'tools/utils/entities'
import { PRODUCT_GUARANTEE_LIST as productGuaranteeListEntities } from 'tools/utils/entities'

export const setProductNewBrand = (data) =>
    postRequest({ data, url: API_SERVICES.product.add.createBrand })

export const getProductList = (data) =>
    getListRequest({ entity: productListEntities, url: API_SERVICES.product.search.productList + data })

export const getAttributesList = (data) =>
    getRequest({ entity: productAttributesEntities, url: API_SERVICES.product.add.attributes + data })

export const createProduct = (data) =>
    postRequest({ data, url: API_SERVICES.product.add.createProduct })

export const setAddProductToSell = (data) =>
    postRequest({ data, url: API_SERVICES.product.search.addProductToSell })

export const getSupplierSalesList = (data) =>
    getListRequest({ entity: productSupplierSalesListEntities, url: API_SERVICES.product.management.supplierSalesList + data })

export const getProductColorsList = (data) =>
    getRequest({ entity: productColorsListEntities, url: API_SERVICES.product.newVariety.productColorsList + data })

export const setCreateColor = (data) =>
    postRequest({ data, url: API_SERVICES.product.newVariety.createColor })

export const getGuaranteeListList = (data) =>
    getRequest({ entity: productGuaranteeListEntities, url: API_SERVICES.product.newVariety.guaranteeList + data })

export const setCreateGuarantee = (data) =>
    postRequest({ data, url: API_SERVICES.product.newVariety.createGuarantee })