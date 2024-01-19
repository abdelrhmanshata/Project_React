import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { increaseProductCart,decreaseProductCart,removeFromCart } from '../store/slices/cart';

export default function Cart() {


  const productsCart = useSelector((state) => state.cart.productsCart);
  const dispatch = useDispatch();

  const totalPrice = productsCart.reduce((total, product) => {
    return total + product.quantity * product.price;
  }, 0);

  return (
    <>
    {productsCart.length === 0 ? (
      <div className="container mt-5">
        <br/>
        <div className="bg-primary mx-auto w-50 text-white p-5 my-5 text-center">
          <h2>Your cart is empty</h2>
        </div>
      </div>
    ) : (
      <>
      <br/>
        <h2 style={{ marginLeft: '7rem' }} className='mt-5 mb-5'>Cart</h2>
        <div className=' mb-5 d-flex '>
          <div>
            <p style={{ marginLeft: '7rem', fontSize: '1.5rem' }}>Description</p>
          </div>
          <div className='  d-flex' style={{ marginLeft: '10rem' }}>
            <div style={{ marginLeft: '19rem', fontSize: '1.5rem' }}><p >Quantity</p></div>
            <div style={{ marginLeft: '13rem', fontSize: '1.5rem' }}><p>Remove</p></div>
            <div style={{ marginLeft: '13rem', fontSize: '1.5rem' }}><p>Price</p></div>
          </div>
        </div>

        <div className='container '>
          {productsCart.map((product) => (
            <div className="row mt-3 py-2 border-bottom" style={{ backgroundColor: "rgb(235, 229, 229)" }}>
              <div className="col-md-1">
                <img className='w-100 mt-4' src={product.image} alt="" />
              </div>
              <div className=" col-md-11">
                <div className="d-flex justify-content-between">
                  <div className="left-side mt-4 r w-25">
                    <h5>{product.title}</h5>
                    <p> <span style={{ fontWeight: 'bold' }}>Brand: </span>{product.brand} </p>
                  </div>
                  <div className="midlle mt-4   " style={{ width: '8rem' }}>
                    <button onClick={() => dispatch( decreaseProductCart(product.id))}  disabled={product.quantity === 1} style={{ fontWeight: 'bold', fontSize: '1rem' }} className='btn  bg-primary'> - </button>
                    <span className='mx-2'>{product.quantity} </span>
                    <button onClick={() => dispatch(increaseProductCart(product.id))} style={{ fontWeight: 'bold', fontSize: '1rem' }} className='btn  bg-primary'> + </button>
                  </div>  
                  <div style={{ width: '8rem' }} className='mt-4  ps-5'>
                    <button onClick={() => dispatch(removeFromCart(product.id))} className='btn text-danger pe-4'>
                      <BsTrash size={30} />
                    </button>
                  </div>
                  <div>
                    <p className='mt-4  me-5' style={{ fontWeight: 'bold', fontSize: '1.5rem', width: '6rem' }}>{product.price * product.quantity} $</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className='row py-2'>
            <div className='col-md-12 bg-primary text-white d-flex justify-content-end me-3 '>
              <span style={{ fontWeight: 'bold', fontSize: '2rem' }}>Total Price: {totalPrice} $</span>
            </div>
          </div>
        </div>
      </>
    )}           
  </>
  );
}

