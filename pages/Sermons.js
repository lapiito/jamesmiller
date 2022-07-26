import React from 'react';
import Styled from 'styled-components';
import * as Icon from 'react-bootstrap-icons';
import card5  from '../images/card1.jpg';
import Bannersimg from './Bannersimg';
import minist  from '../images/ministries.jpg';
import pastor from '../images/pastor.jpg';
import Footer from '../Footer';

function Sermons() {
    return (
        <div>
            <Sermonforms>  
                <Sermonbanner>
                <Bannersimg imgs={minist} ministries={"Youth Ministry"} bread={"Home /  youth ministry"} />
                </Sermonbanner>
                  <Avaliable>
                  Latest Sermons

                  </Avaliable>

              <Singlecard>
                  
                    <Cardholder>
                         <Sermonimage img={card5}></Sermonimage>

                         <Sermonicons> 
                               <span><Icon.CameraVideo color="#4b4b4bce" size={20}></Icon.CameraVideo></span>
                               <span><Icon.Headphones color="#4b4b4bce" size={20}></Icon.Headphones></span>
                               <span><Icon.CloudDownload color="#4b4b4bce" size={18}></Icon.CloudDownload></span>
                               <span><Icon.FileEarmark color="#4b4b4bce" size={18}></Icon.FileEarmark></span>

                         </Sermonicons>
                          <Sermontitle>
                              <Sermonfirst>The Peace of God</Sermonfirst>
                               <Sermonsecond>Speaker: cmsmasters</Sermonsecond>
                                <Sermonthird>May 9, 2016</Sermonthird>
                          </Sermontitle>
                        
                    </Cardholder>    

                    <Cardholder>
                         <Sermonimage img={card5}></Sermonimage>

                         <Sermonicons> 
                               <span><Icon.CameraVideo color="#4b4b4bce" size={20}></Icon.CameraVideo></span>
                               <span><Icon.Headphones color="#4b4b4bce" size={20}></Icon.Headphones></span>
                               <span><Icon.CloudDownload color="#4b4b4bce" size={18}></Icon.CloudDownload></span>
                               <span><Icon.FileEarmark color="#4b4b4bce" size={18}></Icon.FileEarmark></span>

                         </Sermonicons>
                          <Sermontitle>
                              <Sermonfirst>The Peace of God</Sermonfirst>
                               <Sermonsecond>Speaker: cmsmasters</Sermonsecond>
                                <Sermonthird>May 9, 2016</Sermonthird>
                          </Sermontitle>
                        
                    </Cardholder>    










                    <Cardholder>
                         <Sermonimage img={card5}></Sermonimage>

                         <Sermonicons> 
                               <span><Icon.CameraVideo color="#4b4b4bce" size={20}></Icon.CameraVideo></span>
                               <span><Icon.Headphones color="#4b4b4bce" size={20}></Icon.Headphones></span>
                               <span><Icon.CloudDownload color="#4b4b4bce" size={18}></Icon.CloudDownload></span>
                               <span><Icon.FileEarmark color="#4b4b4bce" size={18}></Icon.FileEarmark></span>

                         </Sermonicons>
                          <Sermontitle>
                              <Sermonfirst>The Peace of God</Sermonfirst>
                               <Sermonsecond>Speaker: cmsmasters</Sermonsecond>
                                <Sermonthird>May 9, 2016</Sermonthird>
                          </Sermontitle>
                        
                    </Cardholder>    






            </Singlecard> 

            <Buttonholder>
         
         <Button1>Learn More</Button1>
       
     </Buttonholder>




              <Pastorsprofile>
                     <Pastorimag past={pastor}></Pastorimag>
                      <Pastorprofile>
                             <Pastorname>Apostle Dr. David C. Elijah</Pastorname>
                              <Pastorposition>Senior Pastor</Pastorposition>
                              <Pastorstext>God is not interested in the physical attitude of prayer. It doesn’t make any difference in what horizontal, vertical, or oblong direction your carcass happens to be; if your soul is not down before God, you are not praying. Your body can be in any condition, but if your soul is bold, upright, defiant against God, you know nothing about prayer.</Pastorstext>
                              
                      </Pastorprofile>


              </Pastorsprofile>


            <Footer />           
            </Sermonforms>
        </div>
    )
}






const Avaliable = Styled.div`
  width:100%;
  height:150px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:35px;
  font-weight:bolder;
  margin-top:40px;

//   @media (max-width:900px){
//       margin-top:600px;
  


//   }


`;

const Buttonholder = Styled.div`
  width:100%;
  height:400px;
  margin-top:70px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  padding-top:100px;
  @media (max-width:900px){
    flex-direction:column;
    margin-top:40px;
  }


`;

const Button1 = Styled.div`

  width:220px;
  height:70px;
  border: 2px solid #3b8beb;
  margin-right:20px;
  transition:all 0.8s linear;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#3b8beb;
  font-size:30px;
  font-weight:500px;
  @media (max-width:900px){
    width:200px;
    height:60px;
    display:flex;
    flex-direction:column;
     margin-top:5px;
     margin-right:0px;
     font-size:20px;
  }

&:hover{
    background-color:#3b8beb;
    transition:all 0.8s linear;
    color:#ffffff;



}

`;












const Sermontitle = Styled.div`
width:100%;
height:150px;
border-bottom:0.5px solid #3b8beb;
// display :flex;
// align-items:center;
// justify-content:center;
// flex-direction:column;
`;
const Sermonfirst = Styled.div`
width:100%;
height:50%;
display:flex;
font-size:24px;
font-weight:bolder;
align-items:center;
justify-content:flex-start;
transition:all 0.5s linear ;
&:hover{
  color:#3b8beb;
  transition:all 0.5s linear ;



}



`;
const Sermonsecond = Styled.div`
width:100%;
height:20%;
font-size:18px;
color:gray;

`;
const Sermonthird = Styled.div`
font-size:18px;
color:gray;

`;




const Sermonimage = Styled.div`
width:100%;
height:200px;
background-image:${(props)=>`url(${props.img})`};
background-size:cover;
background-position:center;
background-repeat:no-repeat;

@media (max-width:900px){
   height:300px;



}



`;
const Sermonicons = Styled.div`
width:100%;
height:50px;
display:flex;
justify-content:flex-start;
align-items:center;
border-bottom:0.3px solid #3b8beb;
span{
 margin-right:20px;
 cursor:pointer;
 color:black;


}


`;
const Cardholder = Styled.div
`
width:300px;
height:200px;
margin-top:30px;
margin-right:40px;
@media (max-width:900px){
    width:90%;
    height:260px;
   margin-top:280px;
   margin-right:0px;



}

`;
const Sermonbanner = Styled.div``;
const Singlecard = Styled.div`
width:100%;
min-height:200px;
margin-top:30px;
display:flex;
justify-content:center;
align-items:center;
@media (max-width:900px){
    margin-top:-150px;
  flex-direction:column;

}


`;





const Pastorimag  = Styled.div`
width:50%;
height:100%;
background-position:center;
background-size:cover;
background-repeat:no-repeat;
background-image:${(props)=>`url(${props.past})`};

@media (max-width:900px){
  width:100%;


}
`;
const Pastorstext = Styled.div`
height:40%;
width:100%;
padding-top:30px;
text-align:left;


`;
const Pastorname = Styled.div`
height:30%;
width:100%;
display:flex;
align-items:flex-end;
justify-content:flex-start;
font-size:32px;
font-weight:bolder;

`;
const Pastorposition = Styled.div`
width:100%;
height:10%;
display:flex;
align-items:center;
justify-content:flex-start;
font-size:25px;
font-weight:400;
`;
const Pastorprofile  = Styled.div`
width:50%;
height:100%;
background-color:#FBEAEB;
dispaly:flex;
justify-content:center;
align-items:center;
padding:60px 100px;

@media (max-width:900px){
padding:0px 20px;
width:100%;


}




`;


const Pastorsprofile = Styled.div`
width:100%;
height:80vh;
display:flex;
align-items:center;
justify-content:center;
@media (max-width:900px){
    width:100%;
    height:200vh;
    flex-direction:column;



}


`;





const Sermonforms = Styled.div`
width:100%;
height:100vh;



`;

export default Sermons
