import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList"
import { getDocs, getFirestore, collection, query, where } from "firebase/firestore"



const ItemListContainer = ({ title }) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore()
    const queryCollection = collection(db, 'productos')
    const queryCollectionFilter = categoryId ? query ( queryCollection, where( "categoryId", "==", categoryId) ) : queryCollection
      getDocs(queryCollectionFilter)
      .then(data => setData(data.docs.map(item => ( { id:item.id, ...item.data() } ))))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [categoryId])

  return (
    <div>
      { loading ? <h1>Cargando...</h1> :
      <div style={{display: "flex", flexDirection:"row", flexWrap:"wrap"}}>
        <ItemList products={data} title={title}/>
      </div>
      }
    </div>
  )
}

export default ItemListContainer