import Cookies from 'js-cookie'
import {
    BRANDS,
    GROUPS,
    IS_LOGIN,
    TOKEN_NAME,
    USER_DATA,
} from 'tools/shared/constants'
import gregorian from 'react-date-object/calendars/gregorian'
import gregorian_en from 'react-date-object/locales/gregorian_en'
import Notification from 'components/utils/notification'

export const storage = {
    save: (name, value) => window.localStorage.setItem(name, value),
    get: (name) => JSON.parse(window.localStorage.getItem(name)),
    remove: (name) => window.localStorage.removeItem(name),
}

export const getToken = () => Cookies.get(TOKEN_NAME) || ''
export const setToken = (token) => Cookies.set(TOKEN_NAME, token)
export const removeToken = () => Cookies.remove(TOKEN_NAME)

export const getLoginStatus = () => Cookies.get(IS_LOGIN) || false
export const setLoginStatus = (status) => Cookies.set(IS_LOGIN, status)
export const removeLoginStatus = () => Cookies.remove(IS_LOGIN)

export const getUser = () => storage.get(USER_DATA) || {}

export const getBrands = () => storage.get(BRANDS) || []
export const removeBrands = () => storage.remove(BRANDS)

export const getGroups = () => storage.get(GROUPS) || []
export const removeGroups = () => storage.remove(GROUPS)

export const cacheData = (data, name) => {
    storage.save(name, JSON.stringify(data))
    return data
}

export function cacheUser(data) {
    setLoginStatus(true)
    setToken(data.token)
    storage.save(USER_DATA, JSON.stringify(data))
}
export function removeUser() {
    removeToken()
    removeLoginStatus()
    removeBrands()
    removeGroups()
    storage.remove(USER_DATA)
}

export function resolveDate(date) {
    let split = date.split('/')
    return {
        year: split[0],
        month: split[1],
        day: split[2],
    }
}

export function resolveMonthName(monthNumber) {
    const monthName = {
        '01': 'فروردین',
        '02': 'اردیبهشت',
        '03': 'خرداد',
        '04': 'تیر',
        '05': 'مرداد',
        '06': 'شهریور',
        '07': 'مهر',
        '08': 'آبان',
        '09': 'آذر',
        1: 'فروردین',
        2: 'اردیبهشت',
        3: 'خرداد',
        4: 'تیر',
        5: 'مرداد',
        6: 'شهریور',
        7: 'مهر',
        8: 'آبان',
        9: 'آذر',
        10: 'دی',
        11: 'بهمن',
        12: 'اسفند',
    }[monthNumber]

    return monthName || 'ماه جاری'
}

export const addCommaToNumber = (number) => number.toLocaleString()

export const cutString = (string, start, end) => string.substring(start, end)

export function convertDate(dates) {
    return datesMap(dates, function (date) {
        return date.convert(gregorian, gregorian_en).format()
    })
}

function datesMap(dates, mapFn) {
    return Object.keys(dates).reduce(function (date, key) {
        date[key] = mapFn(dates[key])
        return date
    }, {})
}

export function checkFilters(values) {
    let filters = {}
    const emptyRegex = /(?:(?:^ | $)|( ) )/g
    for (const [key, value] of Object.entries(values)) {
        if (value === undefined || value === null || value === "" || emptyRegex.test(value)) continue
        if (typeof value === 'object' && key !== "provinceAndCity") {
            filters[key] = value.convert(gregorian, gregorian_en).format()
        } else {
            filters[key] = value
        }
    }
    return filters
}

export function convertDigitToChar(digit) {
    const digitChar = {
        1: 'یک',
        2: 'دو',
        3: 'سه',
        4: 'چهار',
        5: 'پنج',
        6: 'شش',
        7: 'هفت',
        8: 'هشت',
        9: 'نه',
        10: 'ده'
    }[digit]

    return digitChar || 'صفر'
}

export function checkValidation(options) {
    for (const entry of options.validationList) {
        if ((!options.model[entry.key]) || options.model[entry.key] === 'Invalid date' || options.model[entry.key].length === 0) {
            const message = (entry.title) ? `لطفا ${entry.title} را وارد نمایید.` : entry.message
            Notification.error(message);
            return false;
        }
    }
    return true;
}

export const days = []
for (let i = 1; i < 32; i++) {
    days.push({
        text: i,
        value: i
    })
}

export const Month = []
for (let i = 1; i < 13; i++) {
    Month.push({
        text: resolveMonthName(i),
        value: i
    })
}

export const year = []
for (let i = 1310; i < 1384; i++) {
    year.push({
        text: i,
        value: i
    })
}

export const renameKeyCategory = (category) => {
    const mapFunction = (data) => {
        return data.map((item) => {
               return {
                   label: item.title,
                   value: item.id,
                   children: item.children.length > 0 ? mapFunction(item.children) : item.children
               };
           })
       }
     return mapFunction(category)  
}


export const transformedKey = (data) => data.map(({ id: value, title: text }) => ({ value, text }))