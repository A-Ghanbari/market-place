import ACL from 'components/ACL'
import { Steps as AntSteps } from 'antd'
import "components/utils/steps/steps.scss"
const { Step } = AntSteps

function Steps({ items, direction = "vertical", current , ...props}) {
    return (
        <AntSteps direction={direction} current={current} {...props}>
            {items.map((step) => (
                <Step
                    key={step.title}
                    title={step.title}
                    icon={step.icon}
                    description={step.text}
                />
            ))}
        </AntSteps>
    )
}

export default ACL(Steps)