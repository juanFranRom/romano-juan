import { useState, useEffect } from 'react'
import {
    BodyContainer,
    BodyDisplay
} from './elements'
import ItemListContainer from '../ItemListContainer'
import { data } from './data'
import ItemDetailContainer from '../ItemDetailContainer'
import Loading from '../Loading'
import Overlay from '../Overlay'

export default function Body() {
    const [loadingProductos, setLoadingProductos] = useState(true)
    const [loadingProducto, setLoadingProducto] = useState(null)
    const [productos, setProductos] = useState(null)
    const [producto, setProducto] = useState(null)
    const [detail, setDetail] = useState(false)
    const [activeItem, setActiveItem] = useState(-1)

    useEffect(() => {
        const getProductos = new Promise((res, rej) => {
            const status = 200;
            setTimeout(() => {
                status === 200 ? res(data) : rej("error")
            }, 2000)
        })
        
        getProductos
        .then(result => {
            setProductos(result)
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            setLoadingProductos(false)
        })
    }, [])

    
    useEffect(() => {
        setLoadingProducto(true)

        const getProducto = ( id ) => new Promise((res, rej) => {
            const status = 200;
            let item
        
            data.forEach(e => {
                if(e.id === id)
                    item = e
            })
        
            setTimeout(() => {
                status === 200 ? res(item) : rej("error")
            }, 2000)
        })

        if(detail)
        {
            getProducto(activeItem)
            .then(result => {
                setProducto(result)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setLoadingProducto(false)
            })
        } 
    }, [detail, activeItem])

    const handleDetail = (item = null) => {
        setDetail(!detail)
        setActiveItem(item)
    }

    return (
        <BodyContainer>
            <BodyDisplay>
                {
                    loadingProductos ? <h2>Cargando</h2> : <ItemListContainer items={productos} handleDetail={handleDetail} />
                }
                {
                    detail 
                    ?   (
                        <>
                        <Overlay handleDetail={handleDetail} display/>
                        {
                            loadingProducto ? <Loading color="rgb(254, 191, 24)"/> : <ItemDetailContainer handleDetail={handleDetail} item={ producto }/>
                        }
                        </>
                    )
                    :   ""
                }
            </BodyDisplay>
        </BodyContainer>
    )
}
