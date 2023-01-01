import AppsLineIcon from 'remixicon-react/AppsLineIcon'
import FundsBoxLineIcon from 'remixicon-react/FundsBoxLineIcon'
import FileList3LineIcon from 'remixicon-react/FileList3LineIcon'
import Settings3LineIcon from 'remixicon-react/Settings3LineIcon'
import ShutDownLineIcon from 'remixicon-react/ShutDownLineIcon'
import MenuUnfoldFillIcon from 'remixicon-react/MenuUnfoldFillIcon'
import MenuFoldFillIcon from 'remixicon-react/MenuFoldFillIcon'
import MoreFillIcon from 'remixicon-react/MoreFillIcon'
import BarcodeBoxLineIcon from 'remixicon-react/BarcodeBoxLineIcon'
import BarcodeLineIcon from 'remixicon-react/BarcodeLineIcon'
import FileExcel2LineIcon from 'remixicon-react/FileExcel2LineIcon'
import PrinterLineIcon from 'remixicon-react/PrinterLineIcon'
import FileEditLineIcon from 'remixicon-react/FileEditLineIcon'
import MenuLineIcon from 'remixicon-react/MenuLineIcon'
import SearchLineIcon from 'remixicon-react/SearchLineIcon'
import ToolsFillIcon from 'remixicon-react/ToolsFillIcon'
import ShoppingBag3LineIcon from 'remixicon-react/ShoppingBag3LineIcon'
import Message2LineIcon from 'remixicon-react/Message2LineIcon'
import TrophyLineIcon from 'remixicon-react/TrophyLineIcon'
import FlagLineIcon from 'remixicon-react/FlagLineIcon'
import SwapBoxLineIcon from 'remixicon-react/SwapBoxLineIcon'
import TodoLineIcon from 'remixicon-react/TodoLineIcon'
import TeamLineIcon from 'remixicon-react/TeamLineIcon'
import UserVoiceLineIcon from 'remixicon-react/UserVoiceLineIcon'
import UserSettingsLineIcon from 'remixicon-react/UserSettingsLineIcon'
import FolderChartLineIcon from 'remixicon-react/FolderChartLineIcon'
import TruckLineIcon from 'remixicon-react/TruckLineIcon'
import StoreLineIcon from 'remixicon-react/StoreLineIcon'
import Ticket2LineIcon from 'remixicon-react/Ticket2LineIcon'
import LockLineIcon from 'remixicon-react/LockLineIcon'
import MailLineIcon from 'remixicon-react/MailLineIcon'
import SmartphoneLineIcon from 'remixicon-react/SmartphoneLineIcon'
import CustomerService2FillIcon from 'remixicon-react/CustomerService2FillIcon'
import CalendarTodoFillIcon from 'remixicon-react/CalendarTodoFillIcon'
import MicrosoftFillIcon from 'remixicon-react/MicrosoftFillIcon'
import DraftLineIcon from 'remixicon-react/DraftLineIcon'
import FolderUploadLineIcon from 'remixicon-react/FolderUploadLineIcon'
import TaskLineIcon from 'remixicon-react/TaskLineIcon'
import ForbidLineIcon from 'remixicon-react/ForbidLineIcon'
import DeleteBin6LineIcon from 'remixicon-react/DeleteBin6LineIcon'

import EmotionLaughLineIcon from 'remixicon-react/EmotionLaughLineIcon'
import EmotionHappyLineIcon from 'remixicon-react/EmotionHappyLineIcon'
import EmotionNormalLineIcon from 'remixicon-react/EmotionNormalLineIcon'
import EmotionUnhappyLineIcon from 'remixicon-react/EmotionUnhappyLineIcon'
import EmotionSadLineIcon from 'remixicon-react/EmotionSadLineIcon'

import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon'
import ArrowDownSLineIcon from 'remixicon-react/ArrowDownSLineIcon'

import { ReactComponent as DashboardIcon } from "assets/images/sidebar-logo/dashboard.svg"
import { ReactComponent as ProfileIcon } from "assets/images/profile.svg"
import { ReactComponent as WalletIcon } from "assets/images/wallet.svg"
import { ReactComponent as QuestionIcon } from "assets/images/question.svg"
import { ReactComponent as MessageIcon } from "assets/images/message.svg"
import { ReactComponent as LogoutIcon } from "assets/images/logout.svg"
import { ReactComponent as ProductIcon } from "assets/images/sidebar-logo/product.svg"
import { ReactComponent as GuideIcon } from "assets/images/sidebar-logo/guide.svg"
import { ReactComponent as PromotionIcon } from "assets/images/sidebar-logo/promotion.svg"
import { ReactComponent as ReportIcon } from "assets/images/sidebar-logo/report.svg"
import { ReactComponent as PackageIcon } from "assets/images/sidebar-logo/package.svg"
import { ReactComponent as OrderIcon } from "assets/images/sidebar-logo/order.svg"
import { ReactComponent as EditIcon } from "assets/images/edit.svg"
import { ReactComponent as EyeIcon } from "assets/images/eye.svg"
import { ReactComponent as AddIcon } from "assets/images/add-tab.svg"

function getIcon(name, props) {
    let icon = {
        'widgetsHolder': <AppsLineIcon {...props} />,
        'excelExport': <FileExcel2LineIcon  {...props} />,
        'widgets': <ToolsFillIcon {...props} />,
        'managerialReports': <FolderChartLineIcon {...props} />,
        'CRMReports': <UserVoiceLineIcon {...props} />,
        'warehouseReports': <FundsBoxLineIcon {...props} />,
        'orders': <FileList3LineIcon {...props} />,
        'manualOrders': <CustomerService2FillIcon {...props} />,
        'barcodeReader': <BarcodeBoxLineIcon {...props} />,
        'accessories': <ShoppingBag3LineIcon {...props} />,
        'palettes': <SwapBoxLineIcon {...props} />,
        'tickets': <Ticket2LineIcon {...props} />,
        'postSettings': <TruckLineIcon {...props} />,
        'productCommentPage': <Message2LineIcon {...props} />,
        'productsSection': <MicrosoftFillIcon {...props} />,
        'marketers': <TeamLineIcon {...props} />,
        'FAQsection': <FlagLineIcon {...props} />,
        'commercial': <StoreLineIcon {...props} />,
        'marketing': <TrophyLineIcon {...props} />,
        'contents': <TodoLineIcon {...props} />,
        'roles': <UserSettingsLineIcon {...props} />,
        'settings': <Settings3LineIcon {...props} />,
        'barcodeList': <BarcodeLineIcon {...props} />,
        'logOut': <ShutDownLineIcon {...props} />,
        'setting': <Settings3LineIcon  {...props} />,
        'menuClose': <MenuUnfoldFillIcon {...props} />,
        'menuOpen': <MenuFoldFillIcon {...props} />,
        'menu': <MenuLineIcon  {...props} />,
        'edit': <EditIcon  {...props} />,
        'changeStatus': <FileEditLineIcon  {...props} />,
        'ellipsis': <MoreFillIcon  {...props} />,
        'eye': <EyeIcon  {...props} />,
        'print': <PrinterLineIcon  {...props} />,
        'add': <AddIcon  {...props} />,
        'search': <SearchLineIcon  {...props} />,
        "calendar": <CalendarTodoFillIcon {...props} />,
        "mail": <MailLineIcon {...props} />,
        "lock": <LockLineIcon {...props} />,
        "phone": <SmartphoneLineIcon {...props} />,
        "form": <DraftLineIcon {...props} />,
        "upload": <FolderUploadLineIcon {...props} />,
        "task": <TaskLineIcon {...props} />,

        "delete": <DeleteBin6LineIcon {...props} />,
        'dashboard': <DashboardIcon {...props} />,
        "profile": <ProfileIcon {...props} />,
        "wallet": <WalletIcon {...props} />,
        'exit': <ForbidLineIcon {...props} />,
        "message": <MessageIcon {...props} />,
        "question": <QuestionIcon {...props} />,
        "logout": <LogoutIcon {...props} />,

        "product": <ProductIcon />,
        "guide": <GuideIcon />,
        "promotion": <PromotionIcon />,
        "report": <ReportIcon />,
        "package": <PackageIcon />,
        "order": <OrderIcon />,

        'laugh': <EmotionLaughLineIcon {...props} />,
        'happy': <EmotionHappyLineIcon {...props} />,
        'normal': <EmotionNormalLineIcon {...props} />,
        'unhappy': <EmotionUnhappyLineIcon {...props} />,
        'sad': <EmotionSadLineIcon {...props} />,

        'arrowRight': <ArrowRightSLineIcon {...props} />,
        'arrowLeft': <ArrowLeftSLineIcon {...props} />,
        'arrowDown': <ArrowDownSLineIcon {...props} />,
    }[name]

    return icon || ''
}

export default getIcon