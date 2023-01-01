import { PageHeader as AntPageHeader } from 'antd'
import "components/utils/pageHeader/pageHeader.scss"

function PageHeader({ title, subTitle, ...props }) {

    return (
        <AntPageHeader
            title={title}
            subTitle={subTitle}
            {...props}
        />
    )
}

export default PageHeader