import Card from 'components/utils/card'
import Form from 'components/utils/form'
import FormRadio from 'components/utils/form/items/FormRadio'
import { FormSelectSearch } from 'components/utils/form/items/FormSelectSearch'
import { ColumnGrid } from 'components/utils/grid'
import Tree from 'components/utils/tree'
import { useEffect, useState } from 'react'

import { getBrands, getGroups, transformedKey } from 'tools/utils'

const asideCardCol = { sm: 24, md: 12, lg: 24, xl: 24, xxl: 24 }

export default function Filter({ setFilters }) {
    const [data, setData] = useState({
        category: "",
        brands: ""
    })
    useEffect(() => {
        setFilters((prev) => ({ ...prev, data }))
    }, [data])


    const groupList = getGroups()
    const brandsList = getBrands()
    //transformedKey is a function in utils that change key for show correctly in ant component option
    const listBrands = transformedKey(brandsList)

    const status = [
        {
            label: 'تمام کالاها',
            value: '0',
        },
        {
            label: 'قابل فروش',
            value: '1',
        },
        {
            label: 'به زودی',
            value: '2',
        },
    ]

    const originality = [
        {
            label: 'تمام کالاها',
            value: '0',
        },
        {
            label: 'کالاهای اصل',
            value: '1',
        },
        {
            label: 'کالاهای غیر اصل',
            value: '2',
        },
    ]

    return (
        <Form >
            <ColumnGrid col={asideCardCol}>
                <Card title="دسته بندی نتایج">
                    <Tree data={groupList} name="treename"
                        onSelect={(_, e) => { setData(prv => ({ ...prv, category: e.node.id })) }} />
                </Card>
                <Card title="برند">
                    <FormSelectSearch
                        onChange={(e) => { setData(prv => ({ ...prv, brands: e })) }}
                        items={listBrands}
                    />
                </Card>
                <Card title="فیلتر بر اساس وضعیت کالا">
                    <FormRadio
                        options={status}
                        onChange={(e) => { setData(prv => ({ ...prv, status: e.target.value })) }}
                    />
                </Card>
                <Card title="فیلتر بر اساس اصالت کالا">
                    <FormRadio
                        options={originality}
                        onChange={(e) => { setData(prv => ({ ...prv, originality: e.target.value })) }}
                    />
                </Card>
            </ColumnGrid>
        </Form>
    )
}





