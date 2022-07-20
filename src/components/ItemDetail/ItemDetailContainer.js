import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
//import { getProds } from '../mock/products';
import ItemDetail from './ItemDetail.js';

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams()
    
    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', id)
        getDoc(queryDoc)
            .then(res => setData({ id:res.id, ...res.data() }))
    }, [id]);

    return (
        <div>
            {loading ? (
                <h2>Cargando...</h2>
            ) : (
                <>
                    <ItemDetail product={data} />
                </>
            )}
        </div>
    );
};

export default ItemDetailContainer;