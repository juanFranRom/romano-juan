import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetail from '../ItemDetail'
import {
    Container
} from './elements'
import {
    getItem
} from '../../helpers/firebase'
import Overlay from '../Overlay'
import Loading from '../Loading'


export const ItemDetailContainer = () => {
    const [loadingProducto, setLoadingProducto] = useState(true)
    const [producto, setProducto] = useState(null)
    const { idItem } = useParams()

    useEffect(() => {
        getItem(idItem)
        .then(data => setProducto(data))
        .finally(() => setLoadingProducto(false))
    }, [idItem])

    return (
        <Container>
            {
                loadingProducto 
                ? 
                    <>
                        <Overlay display/>
                        <Loading color="rgb(254, 191, 24)"/> 
                    </>
                : 
                    <ItemDetail item={ producto }/>
            }
        </Container>
    )
}

export default ItemDetailContainer