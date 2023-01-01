import ACL from 'components/ACL'
import { Form as AntForm } from 'antd'
import Select from 'components/utils/field/select'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getCitiesList } from 'store/actions/public'
import {
    PROVINCE_LIST as provinceEntity
} from "tools/utils/entities"
import "components/utils/form/items/formItem.scss"
import { getProvinceList } from 'store/actions/public'
import { ColumnGrid } from 'components/utils/grid'

const fieldCol = { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 8 }
function FormSelectProvinceAndCity({ provinceLabel, provinceName, cityLabel, cityName, required, ...props }) {
    const [cityList, setCityList] = useState([])

    const provinceList = useSelector(
        (s) => s[provinceEntity.pluralizeName]
    )

    useEffect(() => {
        getProvinceList()
    }, [])

    const handleProvinceChange = (value) => {
        getCitiesList({ ID: value }).then((res) => {
            const selectFormatData = []
            res.data.map((item) => (
                selectFormatData.push({
                    text: item.name,
                    value: item.id,
                })
            ))
            setCityList(selectFormatData);
        })
    };


    return (
        <ColumnGrid col={fieldCol}>
            <AntForm.Item
                className='form-item'
                label={provinceLabel}
                name={provinceName}
                rules={[{ required, message: `انتخاب یکی از فیلد ها اجباری است` }]}
            >
                <Select
                    label={provinceLabel}
                    name={provinceName}
                    required={true}
                    items={[...provinceList]}
                    showSearch
                    onChange={handleProvinceChange}
                />
            </AntForm.Item>
            <AntForm.Item
                className='form-item'
                label={cityLabel}
                name={cityName}
                rules={[{ required, message: `انتخاب یکی از فیلد ها اجباری است` }]}
            >
                <Select
                    label={cityLabel}
                    name={cityName}
                    required={true}
                    showSearch
                    items={[...cityList]}
                />
            </AntForm.Item>
        </ColumnGrid>
    );
};

export default ACL(FormSelectProvinceAndCity)