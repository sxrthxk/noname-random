@import "../../../css-config/mixins.scss";
.hero-vdo {
    margin: 2rem 3.5rem;
    padding: 40px 0;
    position:relative;
    @include md {
        height: calc(80vh - 120px);
        
    }
    .content {
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column-reverse;
        position: relative;
        @include md {
            flex-direction: row;
            max-width: 1200px;
        }
        .intro-vdo {
            position: relative;
            z-index: 9;
            margin-bottom: 20px;
            @include md {
                width: 500px;
                margin-right: 60px;
                margin-top: 50px;
                margin-bottom: 0;
            }
            @include xxl {
                width: 600px;
                margin-right: 0;
                margin-top: 0;
            }
        }
        .text-content {
            color: rgb(15, 15, 15);
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            @include md {
                position: absolute;
                left: 16px;
                top: 50%;
                transform: translateY(-50%);
               // margin-right: 200px;
            }
            @include xxl {
                left: 0;
            }
            h5{
                padding-top: 1.2rem;
                font-size: 25px;
                font-weight: 100;
                line-height: 1;
                color: rgb(11, 10, 10);
                margin-bottom: 20px;
                @include md {
                    font-size: 30px;
                } 
            }
            h2 {
                font-size: 50px;
                font-weight: 400;
                line-height: 1;
                color: rgb(67, 67, 67);
                margin-bottom: 20px;
                @include md {
                    font-size: 60px;
                }
            }
           
            h4{
                font-size: 20px;
                font-weight: 100;
                line-height: 1;
                color: rgb(49, 48, 48);
                margin-bottom: 20px;
                @include md {
                    font-size: 30px;
                }
            }
           
                .vdo-cta {
                    text-transform: uppercase;
                    font-size: 13px;
                    font-weight: 500;
                    width: fit-content;
                    border: 2px solid rgb(7, 6, 6);
                    border-radius: 20px;
                    padding: 10px 20px;
                    transition: all ease 0.3s;
                    cursor: pointer;
                    background-color: rgb(42, 33, 33);
                    color: rgb(248, 241, 241);
                    &:hover {
                        opacity: 0.6;
                    }
                }
            
        }
    }
    .video-js .vjs-big-play-button{
        border-radius: 100%;
        height: 50px;
        width: 50px;
        margin-left: -14px;
    }
}
