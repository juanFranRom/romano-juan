import ItemListContainer from '../ItemListContainer'
import {
    BodyContainer,
    BodyDisplay
} from './elements'

export default function Body() {
    return (
        <BodyContainer>
            <BodyDisplay>
                <ItemListContainer />
            </BodyDisplay>
        </BodyContainer>
    )
}
