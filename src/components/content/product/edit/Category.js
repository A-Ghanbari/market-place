import Collapse from 'components/utils/collapse'
import FormCascader from 'components/utils/form/items/FormCascader'
import { useLocation } from 'react-router-dom'

export default function Category() {
    
    const category = [
        {
            label: "لوازم آرایشی",
            value: 0
        },

        {
            label: "آرایش و مراقبت مو",
            value: 1
        },

        {
            label: "مراقبت از پوست",
            value: 2
        },

        {
            label: "لوازم بهداشتی",
            value: 3
        },

        {
            label: "عطر، ادوکلن و اسپری",
            value: 4,
            children: [
                {
                    label: "عطر جیبی",
                    value: 5
                },

                {
                    label: "اسپری",
                    value: 6
                },

                {
                    label: "عطر و ادوکلن",
                    value: 7
                },

            ]
        },
        {
            label: "بهداشت شخصی",
            value: 8
        },

        {
            label: "بهداشت و زیبایی ناخن",
            value: 9
        },

        {
            label: "مراقبت از کودکان",
            value: 10
        }

    ]
    return (
        <Collapse
            ghost
            defaultActiveKey={['1']}
            title={
                <div className='collapse-header'>
                    <h4>انتخاب گروه کالا</h4>
                    <div className='collapse-line' />
                </div>
            }
        >
            <FormCascader
                name="category"
                options={category}
                label="دسته بندی"
            />
        </Collapse>)
}
