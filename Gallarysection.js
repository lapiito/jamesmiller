import React from 'react';
import Styled from 'styled-components';
import Use1  from './images/use1.jpg'; 
import Use2  from './images/use3.jpg'; 
import Use3  from './images/use2.jpg'; 
import Imagesingle from './Imagesingle';
import Fade from 'react-reveal/Bounce';


function Gallarysection() {
    return (
        <div>
           <Gallaryholder>
            <Imageholder1>
              <Fade>
            <Imagesingle Imagegallary={Use1} Text="National Gathering" /> 

              </Fade>
              <Fade>
            <Imagesingle Imagegallary = {Use2} Text="Community Organizing"/>  

              </Fade>
              <Fade>
            <Imagesingle Imagegallary = {Use3} Text="Christian Education"/>  
            </Fade>
            <Fade>
            <Imagesingle Imagegallary = {Use1} Text="Mission Engagement" />  
            </Fade>
            </Imageholder1>

            <Imageholder2>
            <Fade>
            <Imagesingle Imagegallary = {Use1} Text="Pastoral Care"/> 
            </Fade>
            <Fade>
            <Imagesingle Imagegallary = {Use1}  Text="Leadership"/>  
            </Fade>
            <Fade>
            <Imagesingle Imagegallary = {Use1} Text="Theological Reflections"/>  
            </Fade>
            <Fade>
            <Imagesingle Imagegallary = {Use1} Text="Contemporary Culture"/>       
            </Fade>
            </Imageholder2>
               
        </Gallaryholder> 



        </div>
    )
}

const Imageholder1 = Styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
@media (max-width:800px){
  display:flex;
  flex-direction:column;



}

`;

const Imageholder2 = Styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
@media (max-width:800px){
    display:flex;
    flex-direction:column;
  
  
  
  }
  

`;








const Gallaryholder = Styled.div`
   width:100%;
   height:100vh;
  dislay:flex;
  flex-wrap:wrap;

   
   


`;



export default Gallarysection
