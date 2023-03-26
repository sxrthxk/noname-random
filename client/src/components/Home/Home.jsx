import "./Home.scss";
import Banner from "./Banner/Banner";
import Upload from "./Upload/Upload"
import Products from "../Products/Products";
import Video from "./Video/Video";
import Reviews from "./Reviews/Reviews";
const Home = () => {
    return <div class="home">
        <Banner />
        <div className="main-content">
            <div className="layout">
                <Upload />
                <Products />
                <Video />
                <Reviews/>
            </div>
        </div>
    </div>;
};

export default Home;
