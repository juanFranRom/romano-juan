import ItemListContainer from '../ItemListContainer'
import ItemCount from '../ItemCount'
import {
    BodyContainer,
    BodyDisplay
} from './elements'

export default function Body() {
    return (
        <BodyContainer>
            <BodyDisplay>
                <ItemListContainer greeting="Holi!"/>
                <ItemCount item="Bondiola" stock={5} onAdd={(value, item) => alert(`¡Se agrego ${value} ${item} a su carrito!`)}/>
            </BodyDisplay>
        </BodyContainer>
    )
}
