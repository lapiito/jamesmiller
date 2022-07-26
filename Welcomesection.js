import React from 'react';
import Styled from 'styled-components';
import Fade from 'react-reveal/Fade';


function Welcomesection() {
    return (
        <div>
          <Welcomeholder>
              
               <Welcomecontainer>
               <Fade bottom>
                     <Welcometitle>You’re Welcome Here!</Welcometitle>
                     <Welcomesubtitle>Whether it’s your first time at church or you’ve gone to church for years, our Sunday services are a welcoming place for you to enjoy worshipping Jesus with others.</Welcomesubtitle>
                     </Fade>

               </Welcomecontainer>      
               
        </Welcomeholder>            
        </div>
    )
}


const Welcomesubtitle = Styled.div`
   margin-top:30px;
  text-align:center;
  color:silver;
`;


const Welcometitle = Styled.h1`
  font-size:40px;
  font-weight:bold;
  text-align:center;
 
  
@media (max-width:800px){
    font-size:30px;



}



`;




const Welcomecontainer = Styled.div`
   width:40%;
   height:100%;
   align-items:center;
   padding-top:100px;
   @madia (max-width:800px){
    padding-top:5px;
    width:100%;



   }



`;

const Welcomeholder = Styled.div`
width:100%;
height:50vh;
background-color:#f8edeb;
display:flex;
justify-content:center;
align-items:center;
@media (max-width:800px){
   margin-top:640px;
   height:80vh;


}

`;
export default Welcomesection
