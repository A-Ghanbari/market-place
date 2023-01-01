import Collapse from 'components/utils/collapse'
import FormUpload from 'components/utils/form/items/FormUpload'

export default function Upload() {
    return (
        <Collapse
            collapsible="disabled"
            ghost
            defaultActiveKey={['1']}
            title={
                <div className='collapse-header'>
                    <h4>بارگذاری تصاویر</h4>
                    <div className='collapse-line' />
                </div>
            }
        >
            <FormUpload
                name="upload"
            >
                <div className='profile-upload' />
            </FormUpload>
            <div className='accent-box'>
                <p>ابعاد تصویر بایستی در بازه ۶۰۰x۶۰۰ تا ۲۵۰۰x۲۵۰۰ و حجم آن باید کمتر از ۶ مگابایت باشد.</p>
                <p>کالا باید ۸۵٪ کل تصویر را در برگیرد و پس زمینه تصویر اصلی باید کاملاً سفید باشد.</p>
                <p>تصویر باید فقط کالایی که قصد فروش آن را دارید نمایش دهد و بدون هیچ لوگو، نوشته و یا واترمارکی باشد..</p>
                <p>تصویر شما باید مربعی باشد یا ابعاد یک در یک داشته باشد</p>
                <p>فرمت تصاویر بایستی JPG باشد</p>
                <p>امکان آپلود چندین تصویر به صورت همزمان وجود دارد</p>
                <p>امکان تغییر ترتیب نمایش تصاویر با کشیدن و رها کردن وجود دارد</p>
            </div>
        </Collapse>
    )
}
