import { Layout } from 'antd'

const { Content: AntContent } = Layout

function Content(props) {
    return (
        <AntContent {...props}>
            <div className='content-wrapper'>
                {props.children}
            </div>
        </AntContent>
    )
}

export default Content
