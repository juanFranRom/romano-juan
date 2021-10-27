import { useState } from "react"
import { 
    DetailContainer,
    ImgContainer,
    Detail,
    Precio,
    CountWrapper,
    Linea,
    CartLink,
    Descripcion,
    EmptyDetail,
    ButtonContainer,
    ButtonLink
} from "./elements"
import Count from '../Count'
import Button from '../Button'
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
            {
                item
                ?
                    <>
                        <ImgContainer>
                            <img src={`${process.env.PUBLIC_URL}/assets/Images/${item.image}`} alt='logo'/>
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
                                        <CartLink to="/cart">Terminar Compra</CartLink> 
                                    : 
                                        <CountWrapper>
                                            <Count item={item} onAdd={handleCompra}/>
                                        </CountWrapper>
                                }
                        </Detail>
                    </>
                :
                    <EmptyDetail>
                        <div>
                            <h1>¡UY! Ese corte no lo conocemos...</h1>
                            <p>Pero seguí navegando, seguro algo para comer este domingo vas a encontrar.</p>
                        </div>
                        <ButtonContainer>
                            <ButtonLink to='/'>
                                <Button text={"Volver al Inicio"}/>
                            </ButtonLink>
                        </ButtonContainer>
                    </EmptyDetail>
            }
        </DetailContainer>
    )
}

export default ItemDetail
