import React from 'react';
import Styled from 'styled-components';
import Churchsinglechard from './Churchsinglechard';
import Images1 from './images/department1.jpg';
import Images3 from './images/department3.jpg';
import Images4 from './images/department4.jpg';

function Churchdepartments() {
    return (
        <div>
               <Churchholder>
                   <Churchtitleholder>
                        <Churchtitle>
                        Join Our Church Departments
                        </Churchtitle>
                        <Churchsubtitle>
                        So whether you know your next step or just want to learn more about our church, My Church is the place for you.
                        </Churchsubtitle>
                   </Churchtitleholder>
                       <Churchimage>
                      <Churchsinglechard churchimage={Images1} churchtitle="Church Mission" churchcontent="Mauris pharetra, nisl id placerat imperdiet, ante tortor tempor mauris, id magna felis tempus diam." />           
                      <Churchsinglechard churchimage={Images4} churchtitle="Our Community" churchcontent="Donec vestibulum purus ac nibh fringilla iaculis. Nam venenatis semper tortor, et eleifend nulla sodales ut." />           
                      <Churchsinglechard churchimage={Images3} churchtitle="Join a Group" churchcontent="Nam nec rhoncus libero. Integer tempus dapibus ullamcorp aenean et est nec magna semper viverra curabitur." />
                       </Churchimage>
                       <Buttonsection>

                     <Buttonss>FIND OUT MORE</Buttonss>
                     </Buttonsection>





               </Churchholder>






        </div>
    )
}




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
 width:100%;
 display:flex;
 align-items:center;
 justify-content:center;

 @media (max-width:900px){
   width:100%;
   align-items:flex-start;
   padding-top:20px;






 }



`;



















const Churchimage = Styled.div`
  width:100%;
  height:60%;
  display:flex;
  justify-content:space-around;
  margin-top:-80px;
  @media (max-width:900px){
   display:flex;
   justify-content:center;
   align-items:center;
   flex-direction:column;
   


  }

`;





const Churchtitleholder = Styled.div`
  width:100%;
  height:50%;
  display:flex;
  flex-direction:column;
  text-align:center;
  padding-top:120px;

  @media (max-width:900px){
    padding-top:-200px;
    height:10%;
    padding-top:0px;
  }
 

`;
const Churchtitle = Styled.div`
  font-size:40px;
  font-weight:bolder;
@media (max-width:900px){
  font-size:28px;


}


`;
const Churchsubtitle = Styled.div`
 width:40%;
 margin:12px auto;
 font-size:17px;
 font-weight:300;
 line-height:30px;
 @media (max-width:900px){
   width:60%;


 }

`;

const Churchholder = Styled.div`
width:100%;
height:120vh;
padding:10px 200px;

@media (max-width:900px){
    padding:2px 0px;
  
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:350vh;




`;





export default Churchdepartments
