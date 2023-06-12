import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from './CardsData';
import './style.css'
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';

const Cards = () => {

  const dispatch= useDispatch()
  const addToCart=(data)=>{
    dispatch(ADD(data))
  }

  return (
    <div className='container mt-3'>
      <h3 className='text-center'>Add to Cart</h3>
      <div className="row" style={{gap:'1.5rem' }}>
        {Cardsdata.map((data)=>(
          <Card style={{ width: '22rem', border:"none" }} className='card_style' key={data.id}>
            <Card.Img variant="top" style={{height:"16rem",marginTop:'1rem'}} src={data.imgdata} />
            <Card.Body>
              <Card.Title>{data.rname}</Card.Title>
              <Card.Text>
                Price : {data.price}PKR
              </Card.Text>
              <Button className='col-lg-12' onClick={()=> addToCart(data)} variant="secondary">Add to Cart</Button>
            </Card.Body>
          </Card>

        ))}
        
      </div>
    </div>
  )
}

export default Cards
