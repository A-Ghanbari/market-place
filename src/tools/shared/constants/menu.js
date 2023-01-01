import Icon from 'components/utils/field/Icon'

const menu = {
    main: [
        {
            name: "content",
            title: "محصولات",
            icon: "product",
            children: [
                {
                    name: "content/find",
                    title: "جستجو یا درج محصول",
                    url: "/content/find"
                }, {
                    name: "content/product",
                    title: "مدیریت محصولات",
                    url: "/content/product"
                }, {
                    name: "content/product-config",
                    title: "مدیریت تنوع و قیمت‌ گذاری",
                    url: "/content/product-config"
                }
            ]
        },
        {
            name: "order",
            title: "سفارش ها",
            icon: "order",
            children: [
                {
                    name: "order/list",
                    title: "سفارش‌های تایید شده",
                    url: "/order/list"
                },
                {
                    name: "order/delivery",
                    title: "تنظیمات تحویل",
                    url: "/order/delivery"
                }
            ]
        },
        {
            name: "consignment",
            title: "محموله ها",
            icon: "package",
            children: [
                {
                    name: "consignment/warehouse",
                    title: "ایجاد محموله برای انبار",
                    url: "/consignment/warehouse"
                }, {
                    name: "consignment/list",
                    title: "لیست محموله",
                    url: "/consignment/list"
                }
            ]
        },
        {
            name: "promotion",
            title: "بازاریابی",
            icon: "promotion",
            children: [
                {
                    name: "join",
                    title: "شرکت در پروموشن جدید",
                    url: "/join-promotions-list/index/"
                }, {
                    name: "management",
                    title: "مدیریت پروموشن ها",
                    url: "/promotion-management/"
                }, {
                    name: "ad",
                    title: "تبلیغات",
                    url: "/ad-service/"
                }, {
                    name: "periodic",
                    title: "تخفیف های هوشمند",
                    url: "/periodic-prices/active/"
                }, {
                    name: "product-list",
                    title: "ساخت صفحه سفارشی",
                    url: "/product-list/"
                }
            ]
        },
        {
            name: "report",
            title: "گزارشات",
            icon: "report",
            children: [
                {
                    name: "passiveorders",
                    title: "گزارش سفارش های نهایی شده",
                    url: "/passiveorders/"
                }, {
                    name: "inventory",
                    title: "گزارش موجودی انبار",
                    url: "/inventory/"
                }, {
                    name: "sellercommission",
                    title: "کمیسیون ، هزینه ها و جرایم",
                    url: "/sellercommission/"
                }, {
                    name: "sellerinvoice",
                    title: "صورتحساب ها",
                    url: "/sellerinvoice/"
                }, {
                    name: "overview",
                    title: "گزارش جامع",
                    url: "/reporting-and-insights/overview/"
                }, {
                    name: "clearing",
                    title: "ثبت نام تسویه زود هنگام",
                    url: "#"
                }, {
                    name: "up",
                    title: "گزارش بارگذاری ها ",
                    url: "/imports/"
                }
            ]
        },
        {
            name: "guide",
            title: "راهنما",
            icon: "guide",
            children: [
                {
                    name: "guid",
                    title: "راهنمای درج تا فروش",
                    url: "/profile/new/guide/"
                }, {
                    name: "pricing",
                    title: "راهنمای قیمت گذاری",
                    url: "/profile/new/pricing/"
                }, {
                    name: "faq",
                    title: "سوالات متداول",
                    url: "#"
                }, {
                    name: "academy",
                    title: "مرکز آموزش فروشندگان",
                    url: "#"
                }, {
                    name: "forbidden",
                    title: "کالاهای ممنوعه",
                    url: "#"
                }, {
                    name: "create-content",
                    title: "کارخانه محتوا",
                    url: "#"
                }, {
                    name: "violation",
                    title: "گزارش تخلف",
                    url: "#"
                }
            ]
        }
    ],
    user: [
        {
            title: "داشبورد عملکرد",
            url: "/",
            icon: <Icon type="dashboard" />
        }, {
            title: "پروفایل شما",
            url: "/profile",
            icon: <Icon type="profile" />
        }, {
            title: "کیف پول",
            url: "/wallet",
            icon: <Icon type="wallet" />
        }
    ],
    withIcon: [
        {
            title: "پرسش و پاسخ",
            url: "/questions",
            icon: <Icon type="productCommentPage" />,
            count: 1
        }, {
            title: "پیام ها",
            url: "/messages",
            icon: <Icon type="mail" />,
            count: 3
        }
    ]
}

export default menu