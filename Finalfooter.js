import React from 'react';
import Styled from 'styled-components';
import * as Icon from 'react-bootstrap-icons';
import Fade from 'react-reveal/Bounce';

function Finalfooter({GPPM}) {
    return (
        <div>
           
            <Finalf>
               <Logosections>
               <Fade bottom>
                      <Logoholders>{GPPM}</Logoholders>
                      <Allright>Privacy Policy / This is a church website - gppm © 2021 / All Rights Reserved</Allright>
                      </Fade>
               </Logosections>

                 <Socialhandles>
                 <Fade bottom>
                     <Social>
                         <span><Icon.Facebook ></Icon.Facebook></span>
                         <span><Icon.Google></Icon.Google></span>
                         <span><Icon.Twitter></Icon.Twitter></span>
                         <span><Icon.Twitch></Icon.Twitch></span>
                     </Social>

                     </Fade>
                 </Socialhandles>



            </Finalf>

         
            
        </div>
    )
}

const Logosections = Styled.div`
width:40%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;





`;
const Logoholders = Styled.div`
width:100%;
height:50px;
display:flex;
align-items:center;
font-size:40px;
color:#ffffff;
font-weight:bolder;

@media (max-width:900px){
 height:100px;
 font-size:30px;


}




`;
const Allright  = Styled.div`
color:#364958;

`;
const Socialhandles = Styled.div`
width:50%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
`;
const Social = Styled.div`
width:50%;
height:100%;
display:flex;
justify-content:center;
align-items:center;

span{
    
    font-size:20px;
    color:#ffffff;
    margin-right:10px;
    transition:all 0.5s linear;

    &:hover{
     color:gold;
     cursor:pointer;
     transition:all 0.5s linear;


    }
    @media (max-width:900px){
        width:100%;
        
        
        
        }
        

}



}

`;






const Finalf = Styled.div`
 width:100%;
 height:30vh;
 display:flex;
 flex-direction:row;
 justify-content:center;
 align-items:center;
 background-color:#171717;
 border-top:0.2px solid #2f3e46;
@media (max-width:900px){
  display:flex;
  flex-direction:column;
  height:600px;

}
`;

export default Finalfooter
