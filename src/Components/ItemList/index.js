import {
    List
} from './elements'
import Item from '../Item'

export const ItemList = ({ items }) => {
    return (
        <List>
            {
                items.map(producto => 
                    <Item key={producto.id} item={producto} onAdd={(value, item) => alert(`¡Se agrego ${value} ${item} a su carrito!`)}/>
                )
            }
        </List>
    )
}
