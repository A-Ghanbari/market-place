import API_SERVICES from 'tools/shared/apis'
import { cacheRequest } from 'tools/requests'
import { BRANDS, GROUPS } from "tools/shared/constants"
import { PRODUCT_BRANDS_LIST as brandsListEntities } from 'tools/utils/entities'
import { PRODUCT_LIST as productListEntities } from "tools/utils/entities"

export const getBrandsList = (data) =>
    cacheRequest({ entity: brandsListEntities, name: BRANDS, url: API_SERVICES.product.search.brandsList + data })

export const getGroupsList = (data) =>
    cacheRequest({ entity: productListEntities, name: GROUPS, url: API_SERVICES.product.search.groupList + data })

