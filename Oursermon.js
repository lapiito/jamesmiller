import React from 'react';
import Styled from 'styled-components';
import Search_menu from './Search_menu';
import Sermoncards from './Sermoncards';
import Fade from 'react-reveal/Fade';
import * as Icon from 'react-bootstrap-icons';
import Use1  from './images/use1.jpg';
import Use2  from './images/use3.jpg';
import Use3  from './images/use2.jpg';
function Oursermon() {
    return (
        <div>
             <Sermonholder>

               <Sermontitle>Our Recent Sermons</Sermontitle>
                <Sermoncardholder>
                    <Fade  left>

                   <Sermoncards    Bgimage={Use1} bgtitle="Committing to One Church
"/>

                    </Fade>
                    <Fade  bottom>
                        <Sermoncards  Bgimage={Use2} bgtitle="God’s Word & Spirit"/>
                        
                    </Fade>
                    <Fade  right>
                        <Sermoncards Bgimage={Use3} bgtitle="Church Volunteers Meeting" />
                        
                    </Fade>
                 


                </Sermoncardholder>
                <Buttonhold><Buttonss>More Stories</Buttonss></Buttonhold>


             </Sermonholder>





        </div>
    )
}


const Buttonhold = Styled.div`
    width:100%;
    height:15%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding-bottom:50px;





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
    font-size:20px;
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















const Sermoncardholder = Styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
padding:15px 150px;

@media (max-width:900px){
    
   flex-direction:column;
   justify-content:center;
   align-items:center;
}
`;

const Sermontitle = Styled.div`
 width:100%;
 height:100px;
 display:flex;
justify-content:center;
 font-size:58px;
 font-weight:bolder;
 margin-bottom:50px;
 @media (max-width:800px){
     text-align:center;
     line-height:50px;
     margin-top:30px;
     

 }

`;


const Sermonholder = Styled.div`
  width:100%;
  height:100vh;
  padding-top:80px;
  @media (max-width:800px){
    padding:-top:120px;

  }

  


`;


export default Oursermon
