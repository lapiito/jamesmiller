import React from 'react';
import Styled from 'styled-components';

function Cart_container() {
    return (
        <div>
         <Container>
             <Cartholder>

            <Carttilte>Cart Product</Carttilte>


             </Cartholder>
            



         </Container>


        </div>
    )
}



const Carttilte = Styled.div`
  width:100%;
  height:40px;
  display:flex;
  justify-content:center;
  margin-top:20px;
  color:#ffffff;
  font-size:20px



`;




const Cartholder = Styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
//   justify-content:space-around;
`;



const Container = Styled.div`
   width:40%;
   height:100vh;
  position:fixed;
   right:0;
   justify-content:center;
  background-color:#DDC6B6;
   @media (max-width:800px){
      width:70%;
      top:80px;
      right:0;
   }



`



export default Cart_container
