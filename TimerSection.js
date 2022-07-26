import React, {useState,useRef, useEffect} from 'react';
import Styled from 'styled-components';


function TimerSection() {

const [timeDays, setTimeDays] = useState('00');
const [timeHours, setTimeHours] = useState('00');
const [timeMinutes, setTimeMinutes] = useState('00');
const [timeSeconds, setTimeSeconds] = useState('00');
let interval = useRef();

const starttime = ()=>{
const countdowndate = new Date('May 30 , 2022 00:00:00').getTime();
interval = setInterval(()=>{
const now = new Date().getTime();
const distance = countdowndate - now;
const days =Math.floor(( distance / (1000 * 60 * 60 * 24)));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 )));
const minuties =Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60)));
const seconds =Math.floor((distance % (1000 * 60 * 60 * 24) / (1000)));

if(distance < 0){
clearInterval(interval.current);

}else{
  setTimeDays(days);
  setTimeHours(hours);
  setTimeMinutes(minuties);
  setTimeSeconds(seconds);

}

},1000);
};

useEffect(()=>{

starttime();

return ()=>{

    clearInterval(interval.current)
}




})




    return (
        <div>
            {/* name,type,width,height */}
            <Timercontainer>
                 <Textcontentholder>
                     <p>Next</p>
                     <div>Upcoming Event</div>


                 </Textcontentholder>
                 <Timetimer>
                    <h3>Start a New Way of</h3>  
                      <Div>Living</Div>


                     <Maintime>
                       <Timess>
                         <h1>{timeDays}</h1>       
                         <h2>Days</h2>         
                           
                    </Timess>        
                    <Timess>
                         <h1>{timeHours}</h1>       
                         <h2>Hours</h2>         
                           
                    </Timess>  
                    <Timess>
                         <h1>{timeMinutes}</h1>       
                         <h2>Min</h2>         
                           
                    </Timess> 
                    
                     <Timess>
                         <h1>{timeSeconds}</h1>       
                         <h2>Sec</h2>         
                           
                    </Timess>  
                     </Maintime>  



                 </Timetimer>
                  <Buttonholder>

                <Buttonss>More Events</Buttonss>

                  </Buttonholder>

            </Timercontainer>

        </div>
    )
}


const Timess = Styled.div`
  width:40%;
  
h1{
    
    font-size:25px;
    font-weight:bold;


}
h2{
    font-size:20px;
    font-size:bold;
    color:gray;
    


}





`;

const Maintime = Styled.div`
width:100%;
height:50px;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:flex-end;
margin:50px auto 120px auto;
margin-left:20px;
margin-right:30px;
flex:1;
@media (max-width:800px){
     font-size:30px;
    margin:5px auto 30px auto;
    margin-left:20px;
     margin-top:20px;
}



`;





const Div = Styled.div`
 width:100%;
 height:60px;
 display:flex;
 justify-content:center;
 align-items:center;
 margin-top:-25px;
 font-size:35px;
 font-weight:300;
`;









const Textcontentholder = Styled.div`
  width:100%;
  height:100%;
  flex:1;
  display:flex;
  flex-direction:column;
  font-size:35px;
  font-weight:bold;
  align-items:flex-end;
  justify-content:flex-end;
  margin-right:30px;
  margin-bottom:180px;
  
  p{
      margin-right:190px;
      @media (max-width:800px){
          margin-top:20px;
           display:flex;
           justify-content:center;
           align-items:center;
           margin-right:0px;


      }
      
    }
    
    div{
        margin-top:-30px
    }
    @media (max-width:800px){
       
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        margin-bottom:10px;
    }
`;


const Timetimer  = Styled.div`
// border:1px solid red;
width:100%;
height:100%;
flex:1;
display:flex;
flex-direction:column;

h3{
    margin-top:40px;
    width:100%;
    height:60px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:35px;
    font-weight:300;




}



`;

const Buttonholder = Styled.div`
// border:1px solid red;
width:100%;
height:100%;
flex:1;
display:flex;
justify-content:flex-start;
align-items:center;

@media (max-width:800px){
    display:flex;
    justify-content:center;
    align-items:center;
}

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




const Timercontainer = Styled.div`
    width:100%;
    height:50vh;
    background-color:#faedcd;
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction:row;
    margin-top:200px;
    @media (max-width:800px){
        width:100%;
        height:88vh;
        margin-top:400px;
        display:flex;
        align-items:center;
        justify-content:space-around;
        flex-direction:column;
        
    }
`;

















export default TimerSection
