import ACL from 'components/ACL'
import { Switch as AntSwitch } from 'antd'
import "components/utils/field/switch/switch.scss"

function Switch({...props}) {
    return (
        <AntSwitch {...props} />
    )
}

export default ACL(Switch)
