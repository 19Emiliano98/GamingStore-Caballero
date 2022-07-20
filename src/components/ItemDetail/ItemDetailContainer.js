import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.js';

const ItemDetailContainer = () => {
    //const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const {id} = useParams()
    
    useEffect(() => {
        const queryDoc = doc(getFirestore(), 'productos', id)
        getDoc(queryDoc)
            .then(res => setData({ id: res.id, ...res.data() }))
    }, [id]);

    return (
        <>
            <ItemDetail data={data} />
        </>
    );
};

export default ItemDetailContainer;