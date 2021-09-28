import { 
    CountWrapper, 
    ItemDetail, 
    Link
} from './elements'
import { IconContext } from 'react-icons'


export default function Item({ item }) {
    return (
        <IconContext.Provider value={{color: '#000'}}>
            <CountWrapper>
                <Link to={`/detail/${item.id}`}>
                    <ItemDetail>
                        <h1>{item.name}</h1>
                        <img src={item.image} alt={item.name}/>
                    </ItemDetail>
                </Link>
            </CountWrapper>
        </IconContext.Provider>
    )
}
