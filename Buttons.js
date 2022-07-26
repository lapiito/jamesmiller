import React from 'react';
import Styled from 'styled-components';

function Buttons({name,type,width,height}) {
    return (
        <div>
            
        <Butt width={width} height={height}  type={type? type : "text"} >{name? name : 'Login'}</Butt>

        </div>
    )
}


const Butt = Styled.button`
  width:${({width})=>width};
  height:${({height})=>height};
  border:2px solid red;
  color:#ffff;
  transition:all 0.8s linear;

  &:hover{
     background-color:#2F3C7E;
     transition:all 0.8s linear;
  }
`;

export default Buttons
