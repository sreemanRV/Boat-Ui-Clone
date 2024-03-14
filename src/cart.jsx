import {useSelector,useDispatch} from 'react-redux'
import { RiDeleteBin6Line } from "react-icons/ri";
import {deleteCart,incrementItem,decrementItem,clearCart} from './cartSlice'


const Cart = () => {
    const {cartItems} = useSelector((state)=>state.cart);
    const dispatch = useDispatch();
    const total = cartItems.map(item => item.price * item.quantity).reduce((prev,curr)=>prev+curr,0);
  return (
    <div>

        <div className="hid-cart">
        <div className="cart-view">
        {cartItems.length===0 &&(
            <div>
                <div>
                    <h3 style={{textAlign:"center"}}>Cart is Empty</h3>
                </div>
            </div>
        )

        }
        {cartItems.length>0 &&(
            <div>
            <h3 style={{textAlign:"center"}}>Cart Items</h3>
            </div>
        )}
        {cartItems.map((item)=>{
            const cartqty = item.price*item.quantity
            return(
        <div key={item.id}>
        <div className='cartlist'>
            <div className='cartitems'>
            <div>
            <img className='cart-img' src={item.src} />
            </div>
            <div>
            <h3 style={{margin:"1px"}}>{item.title}</h3>
            <p style={{fontSize:"14px"}}>₹ {item.price}</p>
            </div>
            <div className='cart-qty-btns'>
            <button onClick={()=>dispatch(decrementItem(item.id))} style={{fontSize:"8px"}} className='cart-qty-btn'>-</button>
            {item.quantity}
            <button onClick={()=>dispatch(incrementItem(item.id))} style={{fontSize:"8px"}} className='cart-qty-btn'>+</button>
            ₹{cartqty}
            </div>
            <RiDeleteBin6Line onClick={()=>dispatch(deleteCart(item.id))} className='deletecart' />
            </div>
        </div>
        </div>
            )
        })}
        {cartItems.length>0 &&(
            <div className='cart-btm-details'>
            <div>
        <h3>₹{total}</h3>
        </div>
        <button onClick={()=>dispatch(clearCart())} className='confirm-order-btn'>Confirm Order</button>
        </div>
        )}
        </div>
        </div>
    </div>
    
  )
}

export default Cart;
