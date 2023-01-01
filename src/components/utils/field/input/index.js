import { useState } from "react"
import ACL from "components/ACL"
import "components/utils/field/input/input.scss"

import {
    Input as AntInput
} from 'antd'

function TextArea({ type, children, count, ...props }) {
    return (
        <AntInput.TextArea
            showCount
            maxLength={count}
            autoSize
            {...props}
        >
            {children}
        </AntInput.TextArea>
    )
}
const TextAreaACL = ACL(TextArea)
export { TextAreaACL as TextArea }

function Input({ type, children, ...props }) {
    return (
        <AntInput className="ant-input-affix-wrapper input"{...props} >
            {children}
        </AntInput>
    )
}
const InputACL = ACL(Input)
export { InputACL as Input }

function InputPassword({ type, children, ...props }) {
    return (
        <AntInput.Password {...props} className="input">
            {children}
        </AntInput.Password>
    )
}
const InputPasswordACL = ACL(InputPassword)
export { InputPasswordACL as InputPassword }

function InputSearch({ type, children, ...props }) {
    return (
        <AntInput.Search {...props} >
            {children}
        </AntInput.Search>
    )
}
const InputSearchACL = ACL(InputSearch)
export { InputSearchACL as InputSearch }

function InputNumber({ type, children, ...props }) {
    const [value, setValue] = useState('')

    return (
        <NumericInput
            className="ant-input-affix-wrapper input num-input"
            value={value}
            onChange={setValue}
            {...props}
        />
    )
}
const InputNumberACL = ACL(InputNumber)
export { InputNumberACL as InputNumber }

const NumericInput = (props) => {
    const { value, onChange } = props

    const handleChange = (e) => {
        const { value: inputValue } = e.target
        const reg = /^-?\d*(\.\d*)?$/

        if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
            onChange(inputValue)
        }
    }

    const handleBlur = () => {
        let valueTemp = value

        if (value.charAt(value.length - 1) === '.' || value === '-') {
            valueTemp = value.slice(0, -1)
        }

        // onChange(valueTemp.replace(/0*(\d+)/, '$1'))
    }

    return (
        <AntInput
            {...props}
            onChange={handleChange}
            onBlur={handleBlur}
        />
    )
}