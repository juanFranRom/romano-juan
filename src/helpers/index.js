import { data } from './data'

export const getProducto = ( id ) => new Promise((res, rej) => {
    const status = 200;
    let item

    data.forEach(e => {
        if(e.id === parseInt(id))
            item = e
    })

    setTimeout(() => {
        status === 200 ? res(item) : rej("error")
    }, 2000)
})

export const getProductos = (category) => new Promise((res, rej) => {
    const status = 200;
    if(!category)
    {
        setTimeout(() => {
            status === 200 ? res(data) : rej("error")
        }, 2000)
    }
    else
    {
        setTimeout(() => {
            status === 200 ? res(data.filter(product => product.category === category)) : rej("error")
        }, 2000)
    }
})