import {
    List
} from './elements'
import Item from '../Item'

export const ItemList = ({ items }) => {
    return (
        <List>
            {
                items.map(producto => 
                    <Item 
                        key={producto.id} 
                        item={producto} 
                    />
                )
            }
        </List>
    )
}
