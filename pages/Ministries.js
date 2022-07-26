import React from 'react';
import Styled from 'styled-components';
import Bannersimg from './Bannersimg';
import minist  from '../images/ministries.jpg';
import Ministrycomponent from './Ministrycomponent';
import music  from '../images/music-ministry.jpg';
import music1  from '../images/ministries1.jpg';
import Cardministry from './Cardministry';
import Footer from '../Footer';



function Ministries() {
    return (
        <div>
            <Miniholder>
           <Bannersimg imgs={minist} ministries={"Youth Ministry"} bread={"Home /  youth ministry"} />
            <MinistryComholder>
                  <Ministrycomponent images={music} images1={music1} text={"Quisque pellentesque nibh ut sem elementum pulvinar. Integer bibendum, ligula a dapibus bibendum, massa lectus condimentum augue, sit amet rhoncus nibh arcu ut urna. Nam imperdiet id lectus sed vestibulum. Ut tempor libero sit amet metus fermentum ullamcorper. Nullam scelerisque iaculis purus eu varius. Integer molestie in leo et consectetur. Donec varius velit quis tellus eleifend iaculis. Aenean mi nulla, aliquam placerat orci non, maximus semper ligula. Donec dictum massa et pulvinar maximus. Nunc ut felis a lorem vestibulum posuere. Proin nulla erat, fringilla a sem vel, tincidunt finibus neque. Etiam porta urna eget neque imperdiet efficitur. Aliquam odio orci, vehicula in interdum ultricies, bibendum in velit. Quisque pellentesque nibh ut sem elementum pulvinar. Integer bibendum, ligula a dapibus bibendum, massa lectus condimentum augue, sit amet rhoncus nibh arcu ut urna. Nam imperdiet id lectus sed vestibulum. Ut tempor libero sit amet metus fermentum ullamcorper. Nullam scelerisque iaculis purus eu varius. Integer molestie in leo et consectetur. Donec varius velit quis tellus eleifend iaculis. Aenean mi nulla, aliquam placerat orci non, maximus semper ligula. Donec dictum massa et pulvinar maximus. Nunc ut felis a lorem vestibulum posuere. Proin nulla erat, fringilla a sem vel, tincidunt finibus neque. Etiam porta urna eget neque imperdiet efficitur. Aliquam odio orci, vehicula in interdum ultricies, bibendum in velit."} />
                 <Cardministry />
            </MinistryComholder >

          
            </Miniholder>

            <Footer/>


        </div>
    )
}


const MinistryComholder = Styled.div`
min-height:100%;
width:100%;
padding:0px 200px;
margin-top:50px;
@media (max-width:900px){
  padding:0px 10px;


}


`;

const Miniholder = Styled.div`
 width:100%;
 min-height:100vh;
 padding-bottom:200px;

`;

export default Ministries
