import { Upload as AntUpload } from 'antd'
import { uploadLargeFile } from 'store/actions/upload'
import Notification from 'components/utils/notification';
import { useState } from 'react'

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

    if (!isJpgOrPng) {
        Notification.error('فرمت عکس باید JPG/PNG باشد.');
    }

    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
        Notification.error('حجم عکس باید کمتر از 2MB باشد.');
    }

    return isJpgOrPng && isLt2M;
};

export default function Upload({ children, ...props }) {
    const [uploaded, setUploaded] = useState(false);

    const handleChange = (info) => {
        if (info.file.status === 'done') {
            setUploaded(true)
            return
        }

        if (info.file.status === 'removed') {
            setUploaded(false)
            return
        }
    };

    return (
        <>
            <AntUpload
                name="upload"
                customRequest={(data) => uploadLargeFile(data)}
                beforeUpload={beforeUpload}
                onChange={handleChange}
                {...props}
            >
                {children}
            </AntUpload>
        </>
    )
}