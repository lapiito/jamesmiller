import React from 'react';
import Styled from 'styled-components';
import Fade from 'react-reveal/Bounce';

function ParrallexContent() {
    return (
        <div>
           <Pholder>
             <h1>Free This Weekend? Join Us In Church!</h1>   
               <Textcontents>

               No matter what you’ve been through or what questions you might have, our church is a place where you’ll find the grace, mercy, and forgiveness Jesus gives to everyone.

               </Textcontents>


               <Maintime>
                       <Timess>
                         <h1>17</h1>       
                         <h2>Campuses</h2>         
                           
                    </Timess>        
                    <Timess>
                         <h1>21</h1>       
                         <h2>Sermons</h2>         
                           
                    </Timess>  
                    <Timess>
                         <h1>22</h1>       
                         <h2>Pastors</h2>         
                           
                    </Timess> 
                    
                     <Timess>
                         <h1>26</h1>       
                         <h2>Groups</h2>         
                           
                    </Timess>  
                     </Maintime>  
                     <Fade left>
                     <Buttonss>Join Us</Buttonss>
                      </Fade>
               
               
         </Pholder>             
  




        </div>
    )
}






const Buttonss = Styled.div`
   width:205px;
    height:65px;
    border:2px solid #ffffff;
    background-color:transparent;
    color:silver;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:20px;
    margin:20px auto;
    margin-top:30px;
    color:#ffffff;
    font-weight:600;
    cursor:pointer;
     transition:all 0.5s linear;
    &:hover{
        background-color:#ffffff;
        transition:all 0.5s linear;
        color:#8AAAE5;
        font-size:22px;
    }
`;




















const Timess = Styled.div`
  width:40%;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  margin-top:-200px;


  
h1{
    width:100%;
    height:60%;
    font-size:40px;
    font-weight:bold;
    justify-content:center;
    align-items:flex-start;




}
h2{
    width:100%;
    height:100%;
    font-size:20px;
    font-size:bold;
    color:gray;
    justify-content:center;
    display:flex;
    @media (max-width:800px){
       font-size:15px;


    }
    


}





`;

const Maintime = Styled.div`
width:50%;
height:20px;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
margin:40px auto 60px auto;
flex:1;

@media (max-width:800px){
    width:100%;
    margin:-180px auto 5px auto;

}



`;













const Textcontents = Styled.div`
width:100%;
color:#ffffff;
display:flex;
text-align:center;
height:150px;
padding:20px 400px;
line-spacing:2px;
box-sizing:border-box;
font-size:18px;
font-family:serif;
font-weight:200px;
letter-spacing:0.6px;

@media (max-width:800px){
    line-spacing:0.6px;
   font-size:14px;
   font-weight:100px;
   margin-bottom:200px;
   padding:20px 40px;


}

  

`;






const Pholder = Styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content: space-around;
  align-items:space-around;
  h1{
    margin-top:170px;
    font-size:48px;
    color:#ffffff;
    font-weight:bolder;
    display:flex;
    align-items:center;
    justify-content:center;

    
@media (max-width:900px){
    height:30%;
    font-size:20px;

}

  }
`;




export default ParrallexContent
