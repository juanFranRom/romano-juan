import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { List } from './elements'
import { ItemList } from '../ItemList'
import Loading from '../Loading'
import Overlay from '../Overlay'
import {
    getItems,
    getCategory
} from '../../helpers/firebase'

const titles = [
    {
        id: 'cortes',
        text: 'Cortes'
    },
    {
        id: 'achuras-embutidos',
        text: 'Achuras y Embutidos'
    },
    {
        id: 'elaborados',
        text: 'Elaborados'
    },
]

const getTitle = (idCategory) => {
    const title = titles.find(title => title.id === idCategory)
    return title.text
}

export default function ItemListContainer(){
    const [loadingProductos, setLoadingProductos] = useState(true)
    const [productos, setProductos] = useState(null)
    const { idCategory } = useParams()

    useEffect(() => {
        setLoadingProductos(true)
        if(idCategory)
        {
            getCategory( idCategory )
            .then(data => setProductos(data))
            .finally(() => setLoadingProductos(false))
        }
        else
        {
            getItems()
            .then(data => setProductos(data))
            .finally(() => setLoadingProductos(false))
        }
    }, [idCategory])

    
    return (
        <List>
            <p className="title">{ idCategory ? getTitle(idCategory): "Productos"}</p>
            {
                loadingProductos 
                ? 
                    <>
                        <Overlay display/>
                        <Loading color="rgb(254, 191, 24)"/> 
                    </>
                : 
                    <ItemList items={productos}/>
            }
        </List>
    )
}
