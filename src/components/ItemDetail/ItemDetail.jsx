import React from 'react';
import { useState } from 'react'
import ButtonIn from '../../containers/ButtonIn/ButtonIn'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ data }) => {
  const [state, setState] = useState('button')
    return (
          <div key={data.id}>
          <div className="row">
          <div className="col-md-6">
          <h2>{`Este ${data.categoryId} viene con todas las caracteristicas que uno necesita para una buena compañia!`}</h2>
          </div>
          <div className="col-md-6">
          <img alt="Mascota" src={data.img}/>
          <h3>U$D {data.price}</h3>
          </div>
          </div>
          <div className='row'>
            <div className='col'>
            {
              state === 'button' ?
            <ItemCount data={{data}} setState={setState} stock={5} initial={1}/>
            :
            <ButtonIn/>
            }
            </div>
          </div>
              </div>
    )
}
export default ItemDetail
