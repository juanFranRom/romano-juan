import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetail from '../ItemDetail'
import {
    Container
} from './elements'
import {
    getProducto
} from '../../helpers'
import Overlay from '../Overlay'
import Loading from '../Loading'


export const ItemDetailContainer = () => {
    const [loadingProducto, setLoadingProducto] = useState(true)
    const [producto, setProducto] = useState(null)
    const { idItem } = useParams()

    useEffect(() => {
        getProducto(idItem)
        .then(result => {
            setProducto(result)
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            setLoadingProducto(false)
        })
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