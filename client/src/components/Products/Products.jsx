import "./Products.scss";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Prod1 from "../../assets/products/prod1.png";
import Prod2 from "../../assets/products/prod2.png";
import Prod3 from "../../assets/products/prod3.png";
import Prod4 from "../../assets/products/prod4.png";
import Prod5 from "../../assets/products/prod5.png";
import Prod6 from "../../assets/products/prod6.png";
import Prod7 from "../../assets/products/prod7.png";
import Prod8 from "../../assets/products/prod8.png";
import Prod9 from "../../assets/products/prod9.png";
import Prod10 from "../../assets/products/prod10.png";
import Prod11 from "../../assets/products/prod11.png";

export default function Products() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className="products">
            <h1>BEST SELLERS</h1>
            <Carousel responsive={responsive}>
                {/* prod1 */}
                <div className="card">
                    <img className="product--image" src={Prod1} alt="" />
                    <h3>Dress</h3>  
                    <p className="price">&#8377;899</p>
                    <p>
                        <button>Add to Cart</button>
                    </p>
                </div>
                {/* prod2 */}
               <div className="card">
                    <img className="product--image" src={Prod2} alt="" />
                    <h3>Dress</h3>  
                    <p className="price">&#8377;1599</p>
                    <p>
                        <button>Add to Cart</button>
                    </p>
                </div>
                {/* prod3 */}
                <div className="card">
                    <img className="product--image" src={Prod3} alt="" />
                    <h3>Dress</h3>  
                    <p className="price">&#8377;799</p>
                    <p>
                        <button>Add to Cart</button>
                    </p>
                </div>
                {/* prod4 */}
                <div className="card">
                    <img className="product--image" src={Prod4} alt="" />
                    <h3>Dress</h3>  
                    <p className="price">&#8377;2599</p>
                    <p>
                        <button>Add to Cart</button>
                    </p>
                </div>
                {/* prod5 */}
                <div className="card">
                    <img className="product--image" src={Prod5} alt="" />
                    <h3>Dress</h3>  
                    <p className="price">&#8377;1999</p>
                    <p>
                        <button>Add to Cart</button>
                    </p>
                </div>
                {/* prod6 */}
               <div className="card">
                    <img className="product--image" src={Prod6} alt="" />
                    <h3>Dress</h3>  
                    <p className="price">&#8377;599</p>
                    <p>
                        <button>Add to Cart</button>
                    </p>
                </div>
                {/* prod7 */}
                <div className="card">
                    <img className="product--image" src={Prod7} alt="" />
                    <h3>Dress</h3>  
                    <p className="price">&#8377;549</p>
                    <p>
                        <button>Add to Cart</button>
                    </p>
                </div>
                {/* prod8 */}
                <div className="card">
                    <img className="product--image" src={Prod8} alt="" />
                    <h3>Dress</h3>  
                    <p className="price">&#8377;1199</p>
                    <p>
                        <button>Add to Cart</button>
                    </p>
                </div>
                {/* prod9 */}
                <div className="card">
                    <img className="product--image" src={Prod9} alt="" />
                    <h3>Dress</h3>  
                    <p className="price">&#8377;699</p>
                    <p>
                        <button>Add to Cart</button>
                    </p>
                </div>
                {/* prod10 */}
                <div className="card">
                    <img className="product--image" src={Prod10} alt="" />
                    <h3>Dress</h3>  
                    <p className="price">&#8377;549</p>
                    <p>
                        <button>Add to Cart</button>
                    </p>
                </div>
                {/* prod11 */}
                <div className="card">
                    <img className="product--image" src={Prod11} alt="" />
                    <h3>Dress</h3>  
                    <p className="price">&#8377;1499</p>
                    <p>
                        <button>Add to Cart</button>
                    </p>
               </div>
            </Carousel>
        </div>
    )
}
