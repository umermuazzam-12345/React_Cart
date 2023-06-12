import React, { useEffect, useState }  from 'react'
import Table from 'react-bootstrap/Table' 
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { ADD, DLT, RMV_ONE } from '../redux/actions/action';


const CardsDetails = () => {
  const gotoHome= useNavigate()
  const dispatch=useDispatch()
        const dlt=(id)=>{
                      dispatch(DLT(id))
                      gotoHome('/')
                 }

  const [data,setData]=useState([]) 

  const getdata = useSelector((state)=> state.cartreducer.carts); 
  const {id}=useParams() 

  const comepare=()=>{
    let item= getdata.filter((e)=> e.id==id)
    setData(item)
  }

  useEffect(()=>{
    comepare()
  },[id])



  
  const addToCart=(data)=>{
    dispatch(ADD(data))
  }

  const dltOne=(data)=>{
    dispatch(RMV_ONE(data))
  }

  return (
    <>
      <div className="container mt-2">
        <h2 className='text-center'>Iteams Details Page
        </h2>

        <section className='container mt-3'>
          {
            data.map((item)=>(
              <div key={item.id} className="iteamsdetails">
           
                <>
                <div className="items_img">
              <img src={item.imgdata}  alt="" />
            </div>

            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p> <strong>Restaurant</strong>  : {item.rname}</p>
                    <p> <strong>Price</strong>  : {item.price} PKR</p>
                    <p> <strong>Dishes</strong>  : {item.address}</p>
                    <p> <strong>Total</strong>  : {item.price*item.qnty} PKR</p>
                    <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                    <span style={{fontSize:24}} onClick={item.qnty>1? ()=>dltOne(item):()=>dlt(item.id) } >-</span>
                    <span style={{fontSize:22}}>{item.qnty}</span>
                    <span style={{fontSize:24}} onClick={()=> addToCart(item)} >+</span>

                    </div>

                  </td>
                  <td>
                    <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>Rating ★ {item.rating}</span></p>
                    <p><strong>Order Review :</strong> <span >{item.somedata}</span></p>
                    <p><strong>Remove :</strong> <span ><i onClick={()=> dlt(item.id)} className='fas fa-trash'  style={{color:"red",fontSize:20,cursor:"pointer"}}></i>	</span></p>
                  </td>
                </tr>
              </Table>
            </div>
          
                </>  
          </div>
            ))
          }
        </section>
      </div>
    </>
  )
}

export default CardsDetails