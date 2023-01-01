import FormCheckbox from "components/utils/form/items/FormCheckbox"
import FormInput from "components/utils/form/items/FormInput"
import { ColumnGrid } from "../grid"

const fieldsThreeCol = { sm: 24, md: 24, lg: 12, xl: 8, xxl: 8 }
export default function AttributeMaker({ type, item, ...props }) {
    let attribute = {
        1: <FormInput
            key={item.id}
            label={item.title && item.title}
            name={item.id && `prop${item.id}`}
            {...props}
        />,
        2: item.answers.length &&
            <>
                <h3>{item.title}</h3>
               <ColumnGrid col={fieldsThreeCol}>
                {item.answers.map(child => (
                        <FormCheckbox
                            key={child.id}
                            label={child.title && child.title}
                            name={child.id && `prop${child.id}`}
                            {...props}
                        />
                        ))}</ColumnGrid></>
    }[type]
    return attribute || " "
}
