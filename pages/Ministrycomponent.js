import React from 'react';
import Styled from 'styled-components';
import * as Icon from 'react-bootstrap-icons';


function Ministrycomponent({images,text,images1}) {
    return (
        <div>
            <Minholder>
                <Imagesection image={images} image1={images1}>
                 </Imagesection>
                <Textsection>
                    <Textholder>{text}</Textholder>
                    <Projectsection>
                        <span>Project details</span>
                        <Lister>
                          <div>Likes:</div>  
                           <Span><Spanicon><Icon.SuitHeart color="gray" size={20}></Icon.SuitHeart></Spanicon><Spannumb style={{color:"gray"}}>40</Spannumb></Span>
                        </Lister>
                        <Lister>
                          <div>Author:</div>  
                           <Span><Spannumb>gppmprojects</Spannumb></Span>
                        </Lister>
                        <Lister>
                          <div>Date:</div>  
                           <Span><Spannumb style={{color:"silver"}}>January 24, 2015</Spannumb></Span>
                        </Lister>
                        <Lister>
                          <div>Categories:</div>  
                           <Span><Spannumb>ministries</Spannumb></Span>
                        </Lister>
                    </Projectsection>
                </Textsection>


            </Minholder>
        </div>
    )
}

const Lister  = Styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
border-bottom:0.5px solid silver;
padding-bottom:10px;
margin-top:15px;
div{
 font-weight:600;
 display:flex;
font-size:15px;
}
`;

const Span = Styled.div`
height:20%;
display:flex;
justify-content:space-between;

`;
const Spanicon = Styled.div`
margin-right:10px;
`;
const Spannumb = Styled.div``;










const Minholder = Styled.div`
  width:100%;
  height:100vh;
  margin-bottom:200px;
  transition:all 1s linear;


  @media (max-width:900px){



  }

`;

const Imagesection = Styled.div`
width:100%;
height:80%;
margin-bottom:30px;
background-image:${props=>`url(${props.image})`};
background-position:center;
background-size:cover;
transition:all 1s linear;
background-repeat:no-repeat;
cursor:pointer;
&:hover{
transition:all 1s linear;
 background-image:${props=>`url(${props.image1})`};

}


`;

const Textsection = Styled.div`
width:100%;
min-height:70%;
display:flex;
flex-direction:row;
border-bottom:1px solid silver;
padding-bottom:10px;

@media (max-width:900px){
 flex-direction:column;
 



}

`;
const Textholder = Styled.div`
height:100%;
width:80%;
padding-right:20px;
text-align:left;
color:gray;

@media (max-width:900px){
    width:100%;
 text-align:center;



}

`;
const Projectsection = Styled.div`
height:100%;
width:35%;
text-align:center;
padding-left:40px;

span{
   width:100%;
   height:7%;
   display:flex;
   justify-content:flex-start;
   align-items:flex-start;
   font-size:17px;
   font-weight:bolder;
}



@media (max-width:900px){
width:100%;
margin-top:100px;
margin-right:10px;
padding-bottom:100px;
padding-left:10px;


}

`;

export default Ministrycomponent
