import React from 'react';
import '../../App.css';
import styled from 'styled-components';
import Styled from 'styled-components';
import * as Icon from 'react-bootstrap-icons';

function Sermoncards({Bgimage,bgtitle}) {
    return (
        <div>
            <Cardalls>
                <Imgcardholder imgs={Bgimage}> 
                <div><div><Icon.Book color="#ffffff" size={50}></Icon.Book></div></div>         
                {/* <Imagecard src={CardIm} /> */}
                </Imgcardholder>
                <Imagecardtitle>
                {bgtitle}
                </Imagecardtitle>

            </Cardalls>
            
        </div>
    )
}


const Cardalls = Styled.div`
  width:330px;
  height:260px;
  overflow:hidden;
  flex-direction:column;
  display:flex;
  margin-top:20px;
  }
 
`;

const Imgcardholder = Styled.div`
   width:100%;
   height:220%;
   overflow:hidden;
   background-image:${props => `url(${props.imgs})`};
   background-position:center;
   background-size:cover;
   background-repeat: no-repeat;
   cursor:pointer;
   transition:all 0.5s linear;
   &:hover div {
    transition:all 0.5s linear;
     transform:translateY(0%);

  }




div{
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.1);
  cursor:pointer;
  transform:translateY(100%);
  transition:all 0.5s linear;
  display:flex;
  align-items:center;
  justify-content:center;
  transition:all 0.5s linear infinite;
  div{
    width:50px;
    height:50px;
    animation:icons 3s linear infinite;
    transition:all 2s linear infinite;

  }

}








`;

const Imagecardtitle = Styled.div`
width:100%;
height:100%;
text-align:center;
font-size:23px;
margin-top:15px;
font-weight:bold;
overflow:hidden;
transition:all 0.5s linear;

&:hover{
   color:#8AAAE5;
   transition:all 0.5s linear;


}

`;




export default Sermoncards
