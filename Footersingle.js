import React from 'react';
import Styled from 'styled-components';


function Footersingle({caption,li1,li2,li3,li4,li5}) {
    return (
        <div>
           <Ullist>

               <h1>{caption}</h1>
                <Lilist>{li1}</Lilist>
                <Lilist>{li2}</Lilist>
                <Lilist>{li3}</Lilist>
                <Lilist>{li4}</Lilist>
                <Lilist>{li5}</Lilist> 
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
 margin-left:100px;
 margin-top:30px;

 @media (max-width:900px){
 height:250px;
 margin-left:10px;


 }


 h1{
    font-size:23px;
    color:#fffffff;
    font-weight:bold;
    margin-bottom:15px;
  }


`;

const Lilist = Styled.li`
list-style:none;
font-size:15px;
margin-top:10px;
color:#2f3e46;
transition:all 0.5s linear;

&:hover{
  color:#e1b747;
  transition:all 0.5s linear;


}




`;



export default Footersingle
