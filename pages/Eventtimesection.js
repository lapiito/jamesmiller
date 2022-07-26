import React from 'react';
import Styled from 'styled-components';
import Use1  from '../images/use1.jpg'; 


function Gettoknowyou({moveup}) {
    return (
        <div>
            <Getknowholder moveup={moveup}>
             <Imagesection>
                 <img src={Use1} />
             </Imagesection>

                <DateSection>
                      <Daysection className="d-flex justify-content-center align-items-center">25</Daysection>
                       <Monthsection>

                            <Monthss>September</Monthss>
                            <Daytext>Saturday</Daytext> 

                       </Monthsection>


                </DateSection>


               <TextSections>
                     <h1>Start a New Way of Living</h1>
                      <h4>September 25, 2021 - September 25, 2022 Brooklyn, NY 10036 New York AK United States</h4>
               </TextSections>

        <Buttonsection>

        <Buttonss>FIND OUT MORE</Buttonss>
        </Buttonsection>



            </Getknowholder>



        </div>
    )
}


const Imagesection = Styled.div`
 display:flex;
 width:35%;
 height:100%;
justify-content:center;
align-items:center;


 img{
   margin-top:30px;
   width:80%;
   height:45%;
   
   
   @media (max-width:800px){
    width:100%;
    height:75%;
    padding:5px 20px;
    border-radius:20px;
 
 
  }
 


 }

 @media (max-width:800px){
   width:100%;
   height:40%;
   margin-top:40px;
   

 }


`;

const DateSection = Styled.div`

display:flex;
 width:18%;
 height:100%;
 align-items:center;
justify-content:center;
align-items:center;
flex-direction:row;
 @media (max-width:800px){
   width:100%;
   height:10%;
 
   display:flex;
   justify-content:center;
   align-items:center;
   

 }

`;

const Daysection = Styled.div`
 width:75%;
 height:100%;
  font-size:80px;
  font-weight:bolder;
padding-top:30px;
color:silver;
@media (max-width:900px){
 font-size:100px;
 width:40%;
 height:100%;
 display:flex;
  padding-top:0px;
}

`;

const Monthsection = Styled.div`
  width:85%;
  height:8%;
  display:flex;
  flex-direction:column;
  @media (max-width:900px){
   height:50px;
   width:100%;
   align-items:center;
  

   

  }

`;
const Monthss = Styled.div` 
 width:100%;
 height:100%;
 font-size:20px;
 font-weight:bold;
 @media (max-width:900px){
    padding-left:20px;


 }



`;
const Daytext = Styled.div`
  width:100%;
  height:100%;
  font-size:16px;
  font-weight:400px;
  @media (max-width:900px){
    padding-left:20px;



`;
const TextSections = Styled.div`
width:30%;
height:90%;
display:flex;
flex-direction:column;
font-size:20px;
align-items:flex-end;
padding:20px 40px;

h1{
    height:65%;
    width:100%;
  font-size:25px;
  font-weight:bold;
  align-items:flex-end;
  display:flex;


}

h4{
    height:35%;
    width:100%;
  font-size:15px;
  align-items:flex-start;
  display:flex;
  font-weight:400;
  


}


@media (max-width:900px){
   width:100%;
   height:20%;
   
   
}
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
 height:100%;
 display:flex;
 align-items:center;
 justify-content:center;

 @media (max-width:900px){
   width:100%;
   height:80px;




 }



`;






const Getknowholder = Styled.div`
  width:100%;
  height:49vh;
//   background-color:#edf2fb;
  margin-top:-100px;
  display:flex;
  flex-direction:row;
  margin-top:${(props)=>props.moveup};

  

  @media (max-width:900px){
    height:900px;
    width:100%;
    flex-direction:column;
    margin-top:-190px;

  }
`;





export default Gettoknowyou
