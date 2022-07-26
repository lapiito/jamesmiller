import React from 'react'
import Styled from 'styled-components'

function Cardview({title,contents,buttonTitle}) {
    return (
        <div>
            <div className="card mt-4"  style={{border:'none',minHeight:350,width:300}}>
               <div className="card-body">
                <H1 className="card-title " style={{fontSize:35}}>{title}</H1>
               <CardText className="card-text " style={{marginTop:30,marginBottom:30}}>{contents}</CardText>
               <Buttonss>{buttonTitle}</Buttonss>
            </div>
        </div>
            
        </div>
    )
}


const CardText = Styled.p`
 font-size:16px;
 color:gray;
 letter-spacing:0.7px;

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



const H1 = Styled.h1`
  font-weight:bolder;
  height:90px;
  margin-top:${(props)=> props.marginTop? this.props.marginTop : ''};
  display:flex;
  justify-content:center;
  align-items:center;

`;






export default Cardview
