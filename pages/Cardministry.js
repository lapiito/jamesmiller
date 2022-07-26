import React from 'react';
import '../../../App.css';
import Styled from 'styled-components';
import * as Icon from 'react-bootstrap-icons';
import card1  from '../images/card5.jpg';
import card2  from '../images/card4.jpg';
import card3  from '../images/card3.jpg';
import card4  from '../images/card2.jpg';
import card5  from '../images/card1.jpg';


function Cardministry() {
    return (
        <div>
           <Cardminholder>
               <Title>More projects</Title>
               <Cardcontroller>

               <Cardcontainerholder>
               <Cardmincontainer>
                     <Imagecard   minimage={card2} ></Imagecard>
                       <Cardtest>
                           <h2>March 15, 2021</h2>
                            <span>National Gathering</span>

                       </Cardtest>
               </Cardmincontainer> 





                 <Cardmincontainer>
                     <Imagecard   minimage={card1} ></Imagecard>
                       <Cardtest>
                           <h2>March 15, 2021</h2>
                            <span>National Gathering</span>

                       </Cardtest>
               </Cardmincontainer>        




               <Cardmincontainer>
                     <Imagecard   minimage={card3} ></Imagecard>
                       <Cardtest>
                           <h2>March 15, 2021</h2>
                            <span>National Gathering</span>

                       </Cardtest>
               </Cardmincontainer>   



               <Cardmincontainer>
                     <Imagecard   minimage={card4} ></Imagecard>
                       <Cardtest>
                           <h2>March 15, 2021</h2>
                            <span>National Gathering</span>

                       </Cardtest>
               </Cardmincontainer>   


               <Cardmincontainer>
                     <Imagecard   minimage={card5} ></Imagecard>
                       <Cardtest>
                           <h2>March 15, 2021</h2>
                            <span>National Gathering</span>

                       </Cardtest>
               </Cardmincontainer>



               </Cardcontainerholder>

               </Cardcontroller>
        </Cardminholder> 
        </div>
    )
}

const Cardcontroller = Styled.div`
width:100%;
height:100%;
display:flex;
overflow:hidden;
transition: all 0.6s linear infinite;

@media (max-width:900px){
overflow-x:scroll;
scrollbar:hidden;
 


}



`;



const Imagecard = Styled.div`
width:100%;
height:120px;
background-image:${props=>`url(${props.minimage})`};
background-position:center;
background-size:cover;
background-repeat:no-repeat;
cursor:pointer;





`;
const Cardtest = Styled.div`
display:flex;
flex-direction:column;
line-height:17px;

h2{
margin-top:20px;
font-size:16px;
font-weight:400;
color:silver;

}
span{
    width:100%;
    font-size:18px;
    font-weight:bolder;
    cursor:pointer;
    text-align:left;
    transition:all 0.5s linear;

    &:hover{
    color:#fce181;
    transition:all 0.5s linear;
    }
    
 

}




`;
const Cardcontainerholder = Styled.div`
width:1000px;
height:100%;
display:flex;
animation:autoscroll 10s linear infinite;
transition: all 6s linear infinite;
animation-delay:20s;


@media (max-width:900px){
width:2600px;
animation:autoscroll 10s linear ;

}


`;

const Cardminholder = Styled.div`
width:100%;
height:100%;
margin-top:400px;

@media (max-width:900px){
  height:500px;
  padding-top:180px;
  margin-top:1150px;
  overflow:hidden;

}


`;

const Title = Styled.div`

  width:100%;
  height:40px;
  display:flex;
  margin-bottom:18px;
  justify-content:flex-start;
  align-items:center;
  font-size:20px;
  font-weight:bolder;
  margin-left:20px;


`;






const Cardmincontainer = Styled.div`
width:200px;
height:100%;
margin-left:15px;
position:relative;

@media (max-width:900px){
 margin-left:-16px;


}



`;



export default Cardministry
