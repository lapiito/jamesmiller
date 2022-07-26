import React from 'react';
import Styled from 'styled-components';
import * as Icon from 'react-bootstrap-icons';

function Footerdesign({caption,li1,li2,li3,li4}) {
    return (
        <div>
           <Ullist>

             <h1>{caption}</h1>
                <Lilist><span><Icon.GeoAlt></Icon.GeoAlt></span>{li1}</Lilist>
                <Lilist><span><Icon.ClockHistory></Icon.ClockHistory></span>{li2}</Lilist>
                <Lilist><span><Icon.Envelope></Icon.Envelope></span>{li3}</Lilist>
                <Lilist><span><Icon.Phone></Icon.Phone></span>{li4}</Lilist>
            </Ullist>  
        </div>
    )
}


const Ullist = Styled.ul`
 width:100%;
 height:500px;
 display:flex;
 flex-direction:column;
 color:#ffffff;
 margin-left:0px;
 margin-top:30px;


 h1{
    font-size:23px;
    color:#fffffff;
    font-weight:bold;
    margin-bottom:15px;
    font-size:20px;
    color:#ffffff;
  }

  @media (max-width:900px){
   display:flex;
   flex-direction:column;
   height:100%;
   justify-content:flex-start;
  margin-top:-180px;
  margin-left:-15px;

  }


`;

const Lilist = Styled.li`
list-style:none;
font-size:17px;
margin-top:10px;
color:#2f3e46;
transition:all 0.5s linear;
height:35px;
text-transform:capitalize;
span{
   display:inline;
   width:10px;
   height:20px;
   color: ;
   margin-right:8px;
   font-size:14px;
   color:#e1b747;
 

}


&:hover{
  color:#e1b747;
  transition:all 0.5s linear;


}

@media (max-width:900px){
margin-bottom:10px;



}




`;

export default Footerdesign
