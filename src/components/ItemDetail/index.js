import { 
    DetailContainer,
    ImgContainer,
    Detail,
    Precio,
    CountWrapper,
    Linea
} from "./elements"
import Count from '../Count'

const ItemDetail = ({ item }) => {
    return (
        <DetailContainer>
            <ImgContainer>
                <img src={item.image} alt='logo'/>
            </ImgContainer>
            <Linea/>
            <Detail>
                <h1>{item.name}</h1>
                <p>{item.detail}</p>
                <Precio>
                    <span className="precio">{`$${item.price}`}</span><span className="kg">POR KG</span>
                </Precio>
                <CountWrapper>
                    <Count item={item}/>
                </CountWrapper>
            </Detail>
        </DetailContainer>
    )
}

export default ItemDetail
