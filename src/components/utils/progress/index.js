import { Progress as AntProgress } from 'antd';

export default function Progress({ value, color, ...props }) {
    return (
        <AntProgress
            strokeColor={color}
            percent={value}
            {...props}
        />
    )
}
