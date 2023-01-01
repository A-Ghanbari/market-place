import ProductFilter from 'components/order/list/shavazPost/ProductFilter'
import ProductList from 'components/order/list/shavazPost/ProductList'
import TableActions from './TableActions'

export default function ShavazPost() {
    return (
        <>
            <ProductFilter />
            <TableActions />
            <ProductList />
        </>
    )
}
