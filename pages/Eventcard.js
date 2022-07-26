import React from 'react';
import Styled from 'styled-components';
import Footer from '../Footer';



function Eventcard({img1,title,date,description,day,month}) {
    return (
        <div>
           <Holdingevent>
               <Hisimag img={img1}>
                   <Datetimeholder>
                        <h1>{day}</h1>
                         <h2>{month}</h2>

                   </Datetimeholder>



               </Hisimag>
                <Histitle>
                     <h1>{title}</h1>
                      <span>{date}</span>

                      <div></div>
                </Histitle>
                <Maintext>{description}</Maintext>
           </Holdingevent>




            
        </div>
    )
}

const Maintext = Styled.div`
width:100%;
height:100%;
padding:10px;
color:gray;
text-align:center;

`;

const Histitle = Styled.div`
width:100%;
height:120px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
h1{
font-size:26px;
font-weight:bold;
margin-top:20px;
&:hover{
 cursor:pointer;
 color:gray;



}


}

span{
    width:100%;
    height:100%;
font-size:17px;
font-weight:500;
display:flex;
justify-content:center;
align-items:flex-end;
color:gray;
margin-bottom:20px;

}


div{
  width:100%;
  height:0.5px;
  background-color:gray;




}


`;




const Datetimeholder = Styled.div`
   width:8%;
   height:40%;
   background-color:#ffffff;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   border-bottom: 5px solid silver;
   @media (max-width:900px){
    width:19%;



   }
   h1{
    display:flex;
     height:75%;
     width:100%;
     font-size:15px;
     justify-content:center;
     align-items:center;
     flex:1;
     font-size:25px;
     font-weight:bold;
     color:silver;

   }
h2{
    display:flex;
    height:50%;
    width:100%;
    font-size:15px;
    background-color:coral;
    justify-content:center;
    color:#ffffff;
   align-items:center;
   margin-bottom:-20px;
}



   
`;




const Holdingevent = Styled.div`
  width:100%;
  height:600px;
@media (max-width:900px){
  margin-bottom:200px;



}


`;

const Hisimag = Styled.div`
  width:100%;
  height:45%;
  background-image:${(props)=> `url(${props.img})`};
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  padding-top:10px;
  padding-left:15px;
  cursor:pointer;
  
`;




export default Eventcard
