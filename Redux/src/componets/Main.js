
import { addToCart,removeFromCart,emptyCart } from '../redux/action';
import { useDispatch,useSelector } from 'react-redux';
import { productList } from '../redux/productAction';

function Main() {
    const data = useSelector((state)=>state.productData)
    console.log("data in main componets saga>>>>>",data);

  const dispatch = useDispatch()
  const product = {
    name:"I phone",
    type : "mobile",
    price : 1000,
    color:"red"
  }

  return (
    <div className="App" style={{textAlign:'center',marginTop:10}}>

      <button onClick={()=>dispatch(addToCart(product))} >Add to Cart</button>
      <button onClick={()=>dispatch(removeFromCart(product.name))} >Remove from Cart</button>
      <button onClick={()=>dispatch(emptyCart())} >Empty Cart</button>
<br></br>
<br></br>
<button onClick={()=>dispatch(productList())} >Get Product List</button>
   
    </div>
  );
}

export default Main;
