import { Collapse as AntCollapse } from 'antd'
import "components/utils/collapse/collapse.scss"

const { Panel } = AntCollapse

function Collapse({ title, children, ...props }) {
    return (
        <AntCollapse {...props}>
            <Panel header={title} key="1" {...props}>
                {children}
            </Panel>
        </AntCollapse>
    )
}

export default Collapse