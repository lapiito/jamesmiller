import React from 'react';
import Use1  from './images/use1.jpg'; 
import Styled from 'styled-components';
import Fade from 'react-reveal/Fade';


function Imagesingle({Imagegallary,Text}) {
  
    return (
        <div>

            <Fade bottom>
            <Singleimageholder>

                <div></div>
                <Singleimage  imag={Imagegallary} >
                    {Text}
                </Singleimage>
            </Singleimageholder>


            </Fade>
        </div>
    )
}



const Singleimageholder = Styled.div`
   width:337px;
   height:300px;
   overflow:hidden;
   @media (max-width:800px){
      width:100%;
      height:400px;
      display:flex;
      


   }
 






`;


const Singleimage = Styled.div`
   width:100%;
   height:100%;
   background-image:${prop=>`url(${prop.imag})`};
   background-position:center;
   background-size:cover;
   background-repeat:no-repeat;
   transition:all 0.8s linear;
   display:flex;
   align-items:center;
   justify-content:center;
   font-size:20px;
   color:#ffffff;
   font-weight:bold;
   filter:brightness(80%);

   &:hover{
     transform: scale(1.05);
     transition:all 0.8s linear;
     filter:brightness(100%);
      
     
   }


`;


export default Imagesingle
