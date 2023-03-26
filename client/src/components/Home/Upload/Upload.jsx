import { useState } from "react";
import {saveAs} from 'file-saver';
import "./Upload.scss";
import {TbPhotoPlus} from "react-icons/tb";
import {MdOutlineTransferWithinAStation} from "react-icons/md";
const Upload = () => {
    const [data,setData]=useState();
    console.log(data)
const downloadImg = () =>{
    saveAs(Image, 'image.jpg');
}
    return <div className="hero-secn">
         
        <div className="content">

            <div className="text-content">
            <p>Welcome to the future  of fashion</p>
                <h2>Explore amazing digital fashion dresses</h2>
                <h2>Exclusive on OUTFITV</h2>
            
            <div className="ctas">
                <div className="vdo-cta">Learn More</div>
                <div className="vdo-cta v2">Shop Now</div> 
            </div>
            </div>
            <div className="left1">
            <TbPhotoPlus/>
                    <span className="upload-icon">
                        onClick={() => setData(true)}
                          
                            <input id="imgs" type="file" accept="image/png, image/jpg, image/jpeg" onChange={(e)=>setData (e.target.files)} /> 
           
                        
                        </span>
                
                        
            <div className="uploadimage">
                <label htmlFor="imgs">Upload Your Image</label>
            </div>
            <div className="right1">
                <MdOutlineTransferWithinAStation/>
                <div className="your-look">
                    
                <label>Get Your Digital Look</label>
                </div>
                
                
               
            </div>
            </div>
            
        </div>
    </div>
};
export default Upload;

