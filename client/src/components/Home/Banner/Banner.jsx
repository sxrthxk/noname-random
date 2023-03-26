import "./Banner.scss";
// import BannerImg from "../../../assets/banners2.jpg"
const Banner = () => {
    return <div className="hero-banner">
         
        <div className="content">
        {/* <img className="banner-img" src={BannerImg} alt="" /> */}
            <div className="text-content">
            <h1>V-INSPIRE</h1>
            <p>
                Welcome to the future of fashion now you can buy clothes
                without harming the nature. just upload your photo and get 
                your digital look.
                </p>
                
            <div className="ctas">
                <div className="banner-cta">Read More</div>
                <div className="banner-cta v2">Shop Now</div>
            </div>
            </div>
           
        </div>
    </div>;
};

export default Banner;
