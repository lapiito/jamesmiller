import React from 'react';
import Styled from 'styled-components';


function Bannersimg({imgs,ministries,bread}) {
    return (
        <div>
            <Bannerstop imgss={imgs}>
                       
                <Contents>
                         <h1>{ministries}</h1>
                         <span>{bread}</span>
             </Contents>

            </Bannerstop>
        </div>
    )
}

const Contents = Styled.div`
width:100%;
height:100%;
color:#ffffff;
z-index:10;
font-size:40px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

h1{
font-size:70px;
font-weight:bolder;
margin-top:-140px;


}

span{
 height:180px;
 width:100%;
 display:flex;
 justify-content:center;
 align-items:flex-end;
 margin-bottom:-11%;
 font-size:19px;
 text-transform:capitalize;
 letter-spacing:0.5px;
 @media (max-width:900px){
   font-size:40px;
   padding-bottom:30px;


 }



}



`;


const  Bannerstop = Styled.div`
 width:100%;
 height:79vh;
 background-image:${(props)=>`url(${props.imgss})`};
 background-position:center;
 background-size:cover;
 background-repeat:no-repeat;
 align-content:center;
 z-index:1;
 zoom:80%;
 background-position-y:100px;

 @media (max-width:900px){
  width:100%;
  height:calc(79vh - 10px);
  zoom:0.3;
  background-position-y:40px;
  margin-top:210px;


 }


`;



export default Bannersimg
