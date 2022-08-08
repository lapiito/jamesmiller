import React, {useEffect,useState} from 'react';
import Styled from 'styled-components';
import head from './images/heading.jpg';
import home from './images/home-2.jpg';
import '../../App.css';
import { Link }  from 'react-router-dom';
import Fade from 'react-reveal/Fade';


// import logo from '../../../public/logo512.png'
function Body() {

    const [images, setimages] = useState([head,home]);





return (
 <ImageHolder>

   <Colss  src={head} />
   <Coll  src={home} /> 
  
    <Car>
    <Fade left>
       <p><h1>To Reach More</h1></p>
       <Small>Give More & Reach More</Small>
       </Fade>
       
          <Buttonholder>
         
              <Button1>Learn More</Button1>
              <Button2>Join Us</Button2>
            
          </Buttonholder>



    </Car>
   
</ImageHolder>                  

    )
}


const Buttonholder = Styled.div`
  width:100%;
  height:1100%;
  margin-top:10px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  @media (max-width:900px){
    flex-direction:column;
    margin-top:20px;
  }


`;

const Button1 = Styled.div`

  width:18%;
  height:60%;
  border: 2px solid #FBEAEB;
  margin-right:20px;
  transition:all 0.8s linear;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#FBEAEB;
  font-size:30px;
  font-weight:500px;
  @media (max-width:800px){
    width:200px;
    height:60px;
    display:flex;
    flex-direction:column;
     margin-top:5px;
     margin-right:0px;
     font-size:18px;
  }

&:hover{
    background-color:#FBEAEB;
    transition:all 0.8s linear;
    color:#262223;



}

`;
const Button2 = Styled.div`
width:18%;
height:60%;
border: 2px solid #FBEAEB;
display:flex;
align-items:center;
justify-content:center;
color:#FBEAEB;
font-size:30px;
font-weight:500px;
@media (max-width:800px){
    width:200px;
    height:60px;
    display:flex;
    flex-direction:column;
    margin-top:12px;
    font-size:18px;
  }

  &:hover{
    background-color:#FBEAEB;
    transition:all 0.8s linear;
    color:#262223;



}
`;




const Car = Styled.div`
   
   width:60%;
   height:100%;
   z-index:20;
   display:flex;
   flex-direction:column;
   flex:1;
   margin-top:50px;
@media (max-width:800px){
    width:80%;
    height:50%;
    margin-top:80px;
}
    p{
     width:100%;
     display:flex;
     align-items:center;
     justify-content:center;
     color:#fff;
     margin-top:160px;

     @media (max-width:900px){
        margin-top:-20px;
    }
     
 
     h1{
         font-size:100px;

         @media  (max-width:900px){
            font-size:33px;

        }
        


     }

    }
  
`;

const Small = Styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;
color:#fff;
font-size:50px;
margin-top:-35px;
@media(max-width:900px){
      font-size:20px;
      margin-top:-20px;
}
`;






 const Colss = Styled.img`
 width:100%;
 height:100%;
 position:absolute;
 top:0;
 left:0;
 transition: all 20s linear infinite;
 animation-delay: 20s;
  @media (max-width:900px){
    height:400px;

  }

 `;


 const Coll = Styled.img`
 width:100%;
 height:100%;
 position:absolute;
 top:0;
 left:0;
 transition: all 20s linear infinite;
 animation: displaying 20s linear infinite;
 animation-delay: 20s;
  @media (max-width:900px){
    height:400px;

  }

 `;

const ImageHolder = Styled.div`
width:100%;
height:70vh;
display:flex;
justify-content:center;
align-items:center;
z-index:10;
@media (max-width:900px){
  height:400px;
  position:absolute;
  top:0;
  left:0;
}


`;




export default Body
