import { 
    CountWrapper, 
    ItemDetail, 
    Link
} from './elements'
import { IconContext } from 'react-icons'
import Count from '../Count'


export default function Item({ item, initial = 1, onAdd }) {
    return (
        <IconContext.Provider value={{color: '#000'}}>
            <CountWrapper>
                <Link to={`/detail/${item.id}`}>
                    <ItemDetail>
                        <h1>{item.name}</h1>
                        <img src={item.image} alt={item.name}/>
                    </ItemDetail>
                </Link>
                <Count item={item} onAdd={onAdd}/>
            </CountWrapper>
        </IconContext.Provider>
    )
}
