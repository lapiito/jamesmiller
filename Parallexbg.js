import React from 'react';
import Styled from 'styled-components';
import Imagess from './images/biblestudies.jpg';
import ParrallexContent from './ParrallexContent';



function Parallexbg() {
    return (
        <div>
             <Backgroundholder image={Imagess}>
                 <Backgroundcover>
                <ParrallexContent />


                 </Backgroundcover>
             </Backgroundholder>





        </div>
    )
}

const Backgroundcover = Styled.div`
   width:100%;
   height:100%;
   background-color:rgba(0,0,0,0.6);





`;





const Backgroundholder = Styled.div`
  width:100%;
  height:110vh;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  background-image:url(${(props)=> props.image });
  background-position:center;
  background-size:cover;
  background-repeat: no-repeat;
  background-attachment:fixed;
  @media (max-width:800px){
      
    margin-top:500px;
    height:100vh;
  }
  

`;

export default Parallexbg
