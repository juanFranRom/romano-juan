import { List } from './elements'
import { ItemList } from '../ItemList'


export default function ItemListContainer({ items, handleDetail }){

    return (
        <List>
            <h1>Productos</h1>
            <ItemList items={items} handleDetail={handleDetail} />
        </List>
    )
}
