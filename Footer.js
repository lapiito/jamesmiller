import React from 'react';
import Styled from 'styled-components';
import Finalfooter from './Finalfooter';
import Footerdesign from './Footerdesign';
import Footersingle from './Footersingle';
import Fade from 'react-reveal/Bounce';

function Footer() {
    return (
        <div>
          <Footerholder>
              <Fade bottom>
            <Footerdesign  caption="Info"
             li1="Brooklyn, NY 10036, United States" 
             li2="Sunday: 9:00 AM Sunday: 11:15 AM" 
             li3="example@example.com" 
             li4="Call Us: 1-800-123-1234"
             />
             </Fade>

             <Fade bottom>
         
            <Footersingle caption="Ministries"  li1="Ladies Ministry"
            li2="Small Ministry"
            li3="Youth Ministry"
             li4="Children`s Ministry"
             li5="Prison Ministry"

            />

        </Fade>

          
        <Fade bottom>
            <Footersingle caption="Join Us"  li1="Become a Member"
            li2="Events"
            li3="Join Our Team"
             li4="Internships"
             li5="Serve"

            />
          
          </Fade>
          <Fade bottom>
            <Footersingle caption="I’m New"  li1="What's Sunday like?"
            li2="Statement of Faith"
            li3="Vision and Mission"
             li4="Leadership"
             li5="Connect"

            />
       </Fade>

           
          </Footerholder>
         
           <Finalfooter  GPPM={'GPPM LOGO'} />
         
        </div>
    )
}



const Footerholder = Styled.div`
   width:100%;
   height:50vh;
   background-color:#171717;
    display:flex;
    flex-direction:row;
    justify-content:center;
   @media (max-width:900px){
      height:230vh;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      



   }



`;


export default Footer
