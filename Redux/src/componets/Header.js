
import { UseSelector, useSelector } from "react-redux"

const Header = () => {
    const result= useSelector((state)=> state.CartData)
 console.log("data in header>>>>",result);
    return (
        <div className="header">
            <div className="cart-add">
                <h1>{result.length}</h1>
                <h4>Add to Cart</h4>
                {/* <image src="/redux/image/" alt ="" /> */}
            </div>
        </div>
    )
}


export default Header