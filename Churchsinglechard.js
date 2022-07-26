import React from 'react';
import Styled from 'styled-components';

function Churchsinglechard({churchimage,churchtitle,churchcontent}) {
    return (
        <div>
<Churchall className="card" >
  <img src={churchimage} class="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{churchtitle}</h5>
    <p className="card-text">{churchcontent}.</p>
  </div>
</Churchall>



        </div>
    )
}


const Churchall = Styled.div`
 width:300px;
 border:none;
img{
  height:200px;

}

h5{
  margin:15px 2px;
   font-size:25px;
   font-size:bolder;
}


@media (max-width:900px){
   margin-top:40px;


}



`;


export default Churchsinglechard
