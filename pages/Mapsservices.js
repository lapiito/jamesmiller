import React from 'react';
import '../../../App.css';
import Styled from 'styled-components';


function Mapsservices() {
    return (
        <div>
        <Maps>

          <h2>GPPM GEOLOCATION COMING SOON</h2>



        </Maps>


            
        </div>
    )
}

const Maps = Styled.div`
  width:100%;
  height:200px;
  background-color:silver;
  display:flex;
  align-items:center;
  margin:5px 0px 80px 0px;
  

   h2{
       width:100%;
       height:100px;
       display:flex;
       align-items:center;
       justify-content:center;
     color:#ffff;
     font-size:30px;
     font-weight:bolder;
     animation:icons 3s linear infinite;
     @media (max-width:900px){
        font-size:14px;
        font-weight:bold;
     }
     
   }
`;





export default Mapsservices
