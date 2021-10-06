import { 
    CountWrapper, 
    ItemDetail, 
    Link
} from './elements'


export default function Item({ item }) {
    return (
        <CountWrapper>
            <Link to={`/detail/${item.id}`}>
                <ItemDetail>
                    <h1>{item.name}</h1>
                    <img src={`${process.env.PUBLIC_URL}/assets/Images/${item.image}`} alt={item.name}/>
                </ItemDetail>
            </Link>
        </CountWrapper>
    )
}
