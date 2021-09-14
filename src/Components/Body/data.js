import uuid from 'react-uuid'
import imagenBChorizo from '../../assets/Images/Bife de Chorizo.jpg'
import imagenBLomo from '../../assets/Images/Bola de Lomo.jpg'
import imagenTomahawk from '../../assets/Images/Tomahawk.jpg'
import imagenMCerdo from '../../assets/Images/Matambre de Cerdo.jpg'
import imagenRiñon from '../../assets/Images/Riñon.jpg'
import imagenVTernera from '../../assets/Images/Vacio de Ternera.jpg'


export const data = [
    {
        id: uuid(),
        name: "Bife de Chorizo",
        image: imagenBChorizo,
        detail: 'Emblemático de la carne argentina, es uno de los cortes favoritos para la parrilla. Constituye la parte central del bife angosto, con menos grasa y aprovechamiento integral.',
        price: "700.00",
        stock: 10
    },
    {
        id: uuid(),
        name: "Bola de Lomo",
        detail: 'Se caracteriza por ser un corte tierno y económico, su uso mas popular es para milanesas.',
        image: imagenBLomo,
        price: "700.00",
        stock: 10
    },
    {
        id: uuid(),
        name: "Tomahawk",
        detail: 'Corte obtenido a partir del ojo de bife junto con el hueso entero de la costilla.',
        image: imagenTomahawk,
        price: "700.00",
        stock: 10
    },
    {
        id: uuid(),
        name: "Matambre de Cerdo",
        detail: 'El matambre o "matambrito" de cerdo es uno de los cortes preferidos para la parrilla. Su contenido graso explica su sabor típico. También se prepara tiernizado al horno.',
        image: imagenMCerdo,
        price: "700.00",
        stock: 10
    },
    {
        id: uuid(),
        name: "Riñon",
        detail: 'El riñon, un corte polemico en Argentina, es un alimento económico que se recomienda dejar en remojo con agua y vinagre antes de cocinar hasta eliminar su olor característico.',
        image: imagenRiñon,
        price: "700.00",
        stock: 10
    },
    {
        id: uuid(),
        name: "Vacio",
        detail: 'Uno de los tres cortes parrilleros preferidos por el consumidor argentino, junto al asado y al matambre. Sirve también para hornear por su gran aprovechamiento.',
        image: imagenVTernera,
        price: "700.00",
        stock: 10
    },
]