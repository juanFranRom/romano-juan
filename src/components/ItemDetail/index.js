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
import { useCartContext } from "../../context/CartContext"

const ItemDetail = ({ item }) => {
    const [compra, setCompra] = useState(false)
    const { addItem } = useCartContext()

    const handleCompra = (item, cantidad) => {
        addItem(item, cantidad)
        setCompra(!compra)
    }

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
