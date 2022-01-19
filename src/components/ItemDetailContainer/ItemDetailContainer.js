import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Firebase } from '../../firebase/data';
import ItemDetail from '../ItemDetail/ItemDetail';

export default function ItemDetailContainer() {

    const [itemDom, setItemDom] = useState();

    const { itemId } = useParams();

    useEffect(() => {
        Firebase.get(`productos/${itemId}`).then(res => {
            const item = res.data();
            setItemDom(
                <ItemDetail
                    id={res.id}
                    objeto={item}
                />
            );
        });
    }, []);

    return(
        <>
            {itemDom}
        </>
    )}