import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../components/Context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place_order'>
      <div className="place_order_left">
        <p className='title'>Delivery Information</p>
        <div className='multi_fields'>
          <input type='text' placeholder='First Name' /> 
          <input type='text' placeholder='Last Name' />
        </div>
        <input type='email' placeholder='Email Address' />
        <input type='text' placeholder='Street' />
        <div className='multi_fields'>
          <input type='text' placeholder='City' /> 
          <input type='text' placeholder='State' />
        </div>
        <div className='multi_fields'>
          <input type='text' placeholder='Zip Code' /> 
          <input type='text' placeholder='Country' />
        </div>
        <input type='text' placeholder='Mobile Number' />
      </div>
      <div className="place_order_right">
      <div className="cart_total">
          <h2>Cart Totals</h2>
          <div>
          <div className="cart_total_details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart_total_details">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart_total_details">
                <b>Total</b>
                <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
        <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
