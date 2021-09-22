import { useState } from "react"
import { 
    DetailContainer,
    ImgContainer,
    Detail,
    Precio,
    CountWrapper,
    Linea,
    CartLink,
    Descripcion
} from "./elements"
import Count from '../Count'

const ItemDetail = ({ item }) => {
    const [compra, setCompra] = useState(null)

    const handleCompra = (item, cantidad) => {
        setCompra({item: item, cantidad: cantidad})
    }

    console.log(compra);
    return (
        <DetailContainer>
            <ImgContainer>
                <img src={item.image} alt='logo'/>
            </ImgContainer>
            <Linea/>
            <Detail>
                <Descripcion>
                    <h1>{item.name}</h1>
                    <p>{item.detail}</p>
                </Descripcion>
                <Precio>
                    <span className="precio">{`$${item.price}`}</span><span className="kg">POR KG</span>
                </Precio>
                    {
                        compra 
                        ? 
                            <CartLink to="/cart">Ir a Carrito</CartLink> 
                        : 
                            <CountWrapper>
                                <Count item={item} onAdd={handleCompra}/>
                            </CountWrapper>
                    }
            </Detail>
        </DetailContainer>
    )
}

export default ItemDetail
