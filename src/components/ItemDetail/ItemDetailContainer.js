import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProds } from '../mock/products';
import ItemDetail from './ItemDetail.js';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const {id} = useParams()

    useEffect(() => {
        getProds()
        .then((res) => {
                const productoSeleccionado = res.find(element => element.id === parseInt(id))
                setProduct(productoSeleccionado)
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    return (
        <div>
            {loading ? (
                <h2>Cargando...</h2>
            ) : (
                <>
                    <ItemDetail product={product} />
                </>
            )}
        </div>
    );
};

export default ItemDetailContainer;