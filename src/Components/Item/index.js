import { 
    CountWrapper, 
    ItemDetail, 
} from './elements'
import { IconContext } from 'react-icons'
import Count from '../Count'

export default function Item({ item, initial = 1, onAdd, handleDetail }) {
    return (
        <IconContext.Provider value={{color: '#000'}}>
            <CountWrapper>
                <ItemDetail onClick={() => handleDetail(item.id)}>
                    <h1>{item.name}</h1>
                    <img src={item.image} alt={item.name}/>
                </ItemDetail>
                <Count item={item} onAdd={onAdd}/>
            </CountWrapper>
        </IconContext.Provider>
    )
}
