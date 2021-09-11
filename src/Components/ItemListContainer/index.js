import { useState, useEffect } from 'react'
import { List } from './Elements'
import { data } from './data'
import { ItemList } from '../ItemList'

const getProductos = new Promise((res, rej) => {
    const status = 200;
    setTimeout(() => {
        status === 200 ? res(data) : rej("error")
    }, 2000)
})

export default function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductos
        .then(result => {
            setProductos(result)
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            setLoading(!loading)
        })
    }, [])

    return (
        <List>
            <h1>Productos</h1>
            {
                loading ? <h2>Cargando</h2> : <ItemList items={data} />
            }
        </List>
    )
}
