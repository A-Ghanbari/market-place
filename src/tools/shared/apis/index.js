const API_SERVICES = {
    auth: {
        login: 'api/Auth/LoginCustomer',
        forgetPassword: 'api/Auth/ForgetPassword',
        changePassword: 'api/Auth/ChangePassword',
        initialRegistration: 'api/Auth/RequestForRegister',
        checkValidationCode: 'api/Auth/CheckVerficationCode',
        sendAgainValidationCode: 'api/Auth/SendVerficationCode',
        registerLegalUser: 'api/Auth/RegisterLegalCustomer',
        registerRealUser: 'api/Auth/RegisterRealCustomer',
        confirmRules: 'api/Auth/AcceptRules',
    },
    public: {
        provinces: 'api/Public/GetProvinceCities',
        upload: {
            largeFile: 'Public/UploadImageLargeFile?type=TEST_BIGFILE'
        }
    },
    profile: {
        basic: {
            list: 'api/Profile/GetRealSupplierPersonalInfo',
            edit: 'api/Profile/UpdateRealSupplierPersonalInfo'
        },
        bank: {
            list: 'api/profile/GetSupplierBankInfo',
            edit: 'api/profile/UpdateSupplierBankInfo'
        },
        address: {
            list: 'api/profile/GetSupplierAddressAndWarehousesInfo',
            add: 'api/profile/AddSupplierWarehouse',
            edit: 'api/profile/UpdateSupplierWarehouse',
            delete: 'api/profile/RemoveSupplierWarehouse'
        },
        document: {
            list: 'api/Profile/GetSupplierDocuments',
            add: 'api/Profile/AddSupplierDocument',
            delete: 'api/Profile/RemoveSupplierDocument',
        },
        calender: {
            list: 'api/Profile/GetSupplierWorkDays',
            add: 'api/profile/AddSupplierWorkDay'
        }
    },
    orders: {
        confirm: {
            listProduct: "api/Commerces/GetSupplierProductsSales?",
            listOrder: "api/Commerces/GetSupplierOrdersSales?",
            exportExcel: "api/Commerces/GetSupplierOrdersSalesFile"
        }
    },
    messages: {
        list: 'api/Notification/GetNotificationList?',
        answer: 'api/Notification/UpdateSupplierNotification'
    },
    product: {
        search: {
            groupList: "api/Products/GetCategories?",
            brandsList: "api/Products/GetBrands?",
            productList: "api/Products/GetProducts?",
            addProductToSell: "api/Products/AddProductToSaleList"
        },
        add: {
            attributes: "api/Products/GetCategoryAttributes?",
            createProduct: "api/Products/AddRequestForCreateProduct",
            createBrand: "api/Products/AddRequestForCreateBrand"
        },
        management: {
            supplierSalesList: "api/Products/GetSupplierProductsForSale?"
        },
        newVariety: {
            productColorsList: "api/Commerces/GetProductColors?",
            createColor : "api/Commerces/AddRequestForCreateColor",
            guaranteeList:"api/Commerces/GetCategoryGuarantees?",
            createGuarantee:"api/Commerces/AddRequestForNewGuarantee"
        },

    }
}

export default API_SERVICES