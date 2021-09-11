import { List } from './Elements'
import { data } from './data'
import { ItemList } from '../ItemList'

export default function ItemListContainer() {
    return (
        <List>
            <h1>Productos</h1>
            <ItemList items={data} />
        </List>
    )
}
