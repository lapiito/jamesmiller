import React , {useState,useRef} from 'react';
import Styled from 'styled-components';
import {BrowserRouter as Router ,Route ,Switch , Link }  from 'react-router-dom';
import Calendarsender from './Calendarsender';
import Eventcard from './Eventcard';
import Eventtimesection from './Eventtimesection';
import Mapsservices from './Mapsservices';
import Use1  from '../images/use1.jpg';
import Lightboxs from './Lightboxs';
import Footer from '../Footer';



function Eventmanager() {
    

    const [all , setall ] = useState(true);
    const [months , setmonths ] = useState(false);
    const [mapss , setmapss ] = useState(false);
    const [photos , setphotos ] = useState(false);



    const [valuess , setValues]  = useState('2021-06-16');
    const datetime = useRef();
function finddata(e){
        e.preventDefault();
if(e.currentTarget.value != ''){

setValues(e.currentTarget.value);

}else{

 setValues('2021-06-16');

}



}


function collectvalue(e){
e.preventDefault()

console.log(datetime.current.value);


}


function alllist(){
   setall(true);
//    setdays(false);
   setmapss(false);
//    setweeks(false);
   setphotos(false);
   setmonths(false);



}
function photof(){
    setall(false);
    // setdays(false);
    setmapss(false);
    // setweeks(false);
    setphotos(true);
    setmonths(false);
 
 
 
 }

function monthsf(){
    setall(false);
    // setdays(false);
    setmapss(false);
    // setweeks(false);
    setphotos(false);
    setmonths(true);
 
 
 
 }


 function mapsf(){
    setall(false);
    // setdays(false);
     setmapss(true);
    // setweeks(false);
    setphotos(false);
    setmonths(false);
 
 
 
 }











    return (
        <div>
          <Eventholder>
                <Eventtitle>

                     <span>Events for March 25, 2022 - April 14, 2024</span>
                </Eventtitle>

                { mapss  && 
                <>
                <Mapsservices />
                </>
                 }


                <Formholder>
                     <div className="row col-md-12 ">

                    <div className="form-group col-md-3">
                        <label className="form-label" to="date">Date</label>
                       <input onChange={finddata} ref={datetime}  value={valuess}   type="date" id="date" className="form-control"  />  

                    </div>
                    <div className="form-group col-md-3">
                        <label className="form-label" to="search" >Search</label>
                    <input className="form-control" id="search"  placeholder="Keyword"/>  
                   </div>
                   <div className="form-group col-md-3">
                        <label className="form-label" to="search">Near</label>
                    <input className="form-control"  placeholder="Location" />  
                  
                   </div>


                   <div className="form-gorup  col-md-3  justify-content-center align-items-end d-flex">
                      
                     <Butt className="btn " onClick={collectvalue}>Find Events</Butt>    

                  </div>
                  
                  
                    </div>


                </Formholder>
                <Tabsholder>
                   <Tab  onClick={alllist}>LIST</Tab>
                   <Tab onClick={monthsf}>MONTH</Tab> 
                   <Tab onClick={monthsf}>WEEK</Tab>
                    <Tab onClick={monthsf}>DAY</Tab> 
                    <Tab onClick={mapsf}>MAP</Tab>
                   <Tab  onClick={photof}>PHOTO</Tab> 
                </Tabsholder>


            <Gettinghold>

{all && 
<>
<Eventtimesection moveup={"-250px"}/>
<Eventtimesection moveup={"-50px"}/>
</>

}


 {months && 

                     <Calen>
                    <Calendarsender/>
                     </Calen>

 }
                     {/* img1,title,date,description,day,month */}

{photos && 

               <Holdercard>
                   <Eventcard img1={Use1} title={"Vacation Bible School"} date={"March 25, 2022 - September 8, 2022"} description={"Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend. Nulla eu mattis ipsum. Integer eget sagittis nulla. Praesent consectetur lacus et maximus eleifend. Integer non lacus dui. Mauris tortor diam, laoreet quis commodo vitae, sodales vel augue.| Sed rutrum, libero non pretium tristique, arcu mi sollicitudin ex, quis venenatis orci tellus vel dolor. Donec gravida, dolor ut auctor facilisis, enim dolor pellentesque lectus, nec…"} day={"24"} month={"Match"}/>
                   <Eventcard img1={Use1} title={"Worship at Lifestream"} date={"April 17, 2022 - December 17, 2022"} description={"Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend. Nulla eu mattis ipsum. Integer eget sagittis nulla. Praesent consectetur lacus et maximus eleifend. Integer non lacus dui. Mauris tortor diam, laoreet quis commodo vitae, sodales vel augue.| Sed rutrum, libero non pretium tristique, arcu mi sollicitudin ex, quis venenatis orci tellus vel dolor. Donec gravida, dolor ut auctor facilisis, enim dolor pellentesque lectus, nec…"} day={"24"} month={"Match"}/>
                   <Eventcard img1={Use1} title={"Start a New Way of Living"} date={"May 23, 2022 - November 27, 2022"} description={"Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend. Nulla eu mattis ipsum. Integer eget sagittis nulla. Praesent consectetur lacus et maximus eleifend. Integer non lacus dui. Mauris tortor diam, laoreet quis commodo vitae, sodales vel augue.| Sed rutrum, libero non pretium tristique, arcu mi sollicitudin ex, quis venenatis orci tellus vel dolor. Donec gravida, dolor ut auctor facilisis, enim dolor pellentesque lectus, nec…"} day={"24"} month={"Match"}/>
                   <Eventcard img1={Use1} title={"Easter at Redemption"} date={"September 30, 2022 - April 14, 2024"} description={"Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend. Nulla eu mattis ipsum. Integer eget sagittis nulla. Praesent consectetur lacus et maximus eleifend. Integer non lacus dui. Mauris tortor diam, laoreet quis commodo vitae, sodales vel augue.| Sed rutrum, libero non pretium tristique, arcu mi sollicitudin ex, quis venenatis orci tellus vel dolor. Donec gravida, dolor ut auctor facilisis, enim dolor pellentesque lectus, nec…"} day={"24"} month={"Match"}/>
               </Holdercard>
}



            </Gettinghold>
     {/* <Lightboxs /> */}
           
          </Eventholder>







      <Footing>

           <Footer  />

      </Footing>




        </div>
    )
}


const Footing = Styled.div`

width:100%;
height:80vh;
position:relative;
@media (max-width:900px){



}




`;



const Holdercard = Styled.div`
 flex-direction:row;
 align-items:center;
 justify-content:center;
 flex-wrap:wrap;
margin-top:-100px;
margin-bottom:100px;

@media (max-width:900px){
  margin-bottom:300px;


}

`;






const Calen = Styled.div`
 width:100%;
 display:flex;
 align-items:center;
 justify-content:center;
 margin-top:-110px;





`;

const Gettinghold = Styled.div`
 height:25%;
 width:100%;
 

`;

const Tab = Styled.div`
margin-right:20px;
font-weight:bolder;
font-size:15px;
cursor:pointer;
z-index:10;

@media (max-width:900px){
font-size:14px;


}
`;
const Tabsholder = Styled.div`
width:100%;
height:160px;
display:flex;
justify-content:flex-start;
align-items:center; 
margin-bottom:170px;

@media (max-width:900px){
    height:30px;


}

`;







const Butt = Styled.button`
 width:190px;
 height:55px;
 border:2px solid #8AAAE5;

 border:2px solid #8AAAE5;
 background-color:transparent;
 color:silver;
 display:flex;
 align-items:center;
 justify-content:center;
 font-size:14px;
 text-transform:uppercase;
 margin:20px auto;
 margin-top:30px;
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

const Formholder = Styled.div`
width:100%;
height:15%;
margin-top:-20px;

@media (max-width:900px){

 margin-top:10px;

}

input{
    height:55px;
    @media (max-width:900px){
       
       margin-bottom:15px;


    }



}
label{
 font-size:18px;
 font-weight:bold;




}

@media (max-width:900px){
  display:none;



}


`;
const Eventholder = Styled.div`
width:100%;
min-height:200vh;
padding-top:50px;
padding:30px 200px;
@media (max-width:900px){
width:95%;
  padding:5px 15px;
  

}

`;
const Eventtitle = Styled.div`
width:100%;
height:20%;
display:flex;
align-items:center;
font-weight:bolder;
margin-top:80px;

span{
  display:flex;
  justify-content:center;
  font-size:25px;
  padding-top:2px;
  margin-bottom:30px;

  @media (max-width:900px){
    font-size:23px;
    display:flex;
    align-items:center;
    text-align:center;
}

}

@media (max-width:900px){
    font-size:20px;
    padding:2px 1px;



}


`;

export default Eventmanager
