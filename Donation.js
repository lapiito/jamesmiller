import React from 'react';
import Styled from 'styled-components';
import Donations from './images/donation.jpg';

function Donation() {
    return (
        <div>
           <Donationholder>
               <TextImhold>
                   <h1>Help Us To Help The Poor</h1>  
                    <h4>God is the Creator and Ruler of the universe. He has existed eternally in three persons: the Father, Son, and Holy Spirit. These three are co-equal and are one God.</h4>
                   
                    <Buttonsection>
                        <Buttonss>DONATE</Buttonss>
                    </Buttonsection>

            </TextImhold>     
               <Donationimg className="order1" image={Donations}></Donationimg>
               
               
            </Donationholder> 
        </div>
    )
}



const TextImhold = Styled.div`
width:100%;
height:70%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;

@media (max-width:900px){
   height:100%;



}


h1{
 height:40%;
 width:40%;
 font-size:38px;
 font-weight:bolder;
 text-align:center;
 display:flex;
 align-items:center;
 justify-content:center;

}

h4{
    height:30%;
    width:60%;
    font-size:18px;
    color:silver;
    font-weight:400;
    line-height:25px;
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center2
}



`;
const Donationimg = Styled.div`
width:100%;
height:100%;
background-image:${props => `url(${props.image})`};
background-position:center;
background-size:cover;
background-repeat:no-repeat;
`;







const Buttonss = Styled.div`
   width:205px;
    height:65px;
    border:2px solid #8AAAE5;
    background-color:transparent;
    color:silver;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:15px;
    margin:20px auto;
    margin-top:30px;
    color:#8AAAE5;
    font-weight:600;
    cursor:pointer;
     transition:all 0.5s linear;
    &:hover{
        background-color:#8AAAE5;
        transition:all 0.5s linear;
        color:#ffffff;
    }
`;




const Buttonsection = Styled.div`
 width:20%;
 height:50%;
 display:flex;
 align-items:center;
 justify-content:center;

 @media (max-width:900px){
   width:100%;
   height:80px;




 }



`;





















const Donationholder = Styled.div`
margin-top:200px;
  width:100%;
  height:100vh;
   display:flex;
   flex-direction:row;
   justify-content:center;
   align-items:center;
   background-color: #edf2fb;

  @media (max-width:900px){
    height:150vh;
    flex-direction:column;
    margin-top:-200px;



  }






`;



export default Donation
