import React from 'react';
import Styled from 'styled-components';
import Cardview from './Cardview';
import Fade from 'react-reveal/Fade';

function Newheresection() {
    return (
        <div>
            <Hereholder>
                <Fade bottom>

                 <Cardview title="New Here?" contents="My Church is an online community designed to equip churches reaching people far from God. We help develop and resource leaders with tools for Jesus-centered leadership and living." buttonTitle="Learn More" />

                </Fade>

                <Fade bottom>

                 <Cardview  title="Finding Your Way" contents="Leaders in the church today face the challenge of engaging a culture that has written off religion and the local church. Jesus is the hope of the world, and we want to raise up a generation of leaders." buttonTitle="Learn More" />

                </Fade>


            </Hereholder>
        </div>
    )
}



const Hereholder = Styled.div`
   width:100%;
   height:100vh;
   display:flex;
   justify-content:space-around;
   padding-top:100px;
   @media (max-width:800px){
    flex-direction:column;
    display:flex;
    justify-content:center;
    align-items:center;
    padding-top:300px;
    


   }


`;
export default Newheresection
