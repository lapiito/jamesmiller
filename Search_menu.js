import React,{useState} from 'react'
import Styled from 'styled-components';
import * as Icon from 'react-bootstrap-icons';

function Search_menu() {

  const [state, setstate] = useState('');

const closer = () =>{


  setstate('none')

 console.log(state)
}



    return (
        <div>
      { state ? ' ':  <Searchcover>
         <input type="text"    placeholder="Enter Search..." />  
         <Icon.XLg style={{position:'absolute',top:100,right:20,cursor:'pointer'}} onClick={closer} color="gray"  size={30}></Icon.XLg>
          </Searchcover>
            }
        </div>  
    )
}

const Searchcover = Styled.div`
width:100vw;
height:100vh;
background-color:#FBEAEB;
position:absolute;
top:0;
left:0;
display:flex;
align-items:center;
justify-content:center
border:none;
z-index:100;
input{
   width:100%;
   height:60px;
   margin-left:30px;
   margin-right:30px;
   margin-top:-200px;
   border:none;
   background-color:#FBEAEB;
   outline:0;
   border-bottom: 2px solid #8AAAE5;
   font-size:30px;
   font-weight:100;
   letter-spacing:2px;
}

@media (min-width:1000px){
input{
     margin-left:300px;
     margin-right:300px;


  }


}





}
`;

export default Search_menu
