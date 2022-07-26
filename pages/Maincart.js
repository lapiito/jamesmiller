import React, {useState,useRef,useEffect} from 'react';
import Cart  from '../images/cart.jpg';
import Styled from 'styled-components';
import * as Icon from 'react-bootstrap-icons';
import minist  from '../images/ministries.jpg';
import Bannersimg from './Bannersimg';
import Footer from '../Footer';




function Maincart() {
  
    const [quatity , setquantity] = useState(1);
    const inp  = useRef();

    function changing(e){
    e.preventDefault();
if(inp.current.value >= 1){
  var quant = quatity * inp.current.value;
  setquantity(quant)
  


}else{


  inp.current.value = 1;
}



    
    }
    









    return (
        <div>

      
            <Bannersimg imgs={minist} ministries={"Cart"} bread={"Home /  Cart Section"} />
            <Cartholder>
                 <Cartcontainer>
                     <Cartbar>
                         <Span1>Image / Description</Span1>
                         <Span2>Quantity</Span2>
                        <Span3>Price</Span3>
                    </Cartbar>
                     <Cartbody>
                        <Cartimagecontent>
                              <Cartimg carting={Cart}></Cartimg>
                               <Cartdesc>
                                   <h3>Product Name</h3>
                                   <h5><Icon.StarFill color="gold" size={17}></Icon.StarFill><Icon.StarFill color="gold" size={17}></Icon.StarFill><Icon.StarFill color="gold" size={17}></Icon.StarFill><Icon.StarFill color="gold" size={17}></Icon.StarFill><Icon.StarHalf color="gold" size={17}></Icon.StarHalf></h5>
                                   <div>are not praying. Your body can be in any condition</div>
                               </Cartdesc>
                        </Cartimagecontent>
                           <Cartinput>

                               <input ref={inp} className="form-control" type="number" min="1" onChange={changing} />

                           </Cartinput>
                             <Cartprice className="num">{quatity}</Cartprice>



                     </Cartbody>


                     <Cartbody>
                        <Cartimagecontent>
                              <Cartimg carting={Cart}></Cartimg>
                               <Cartdesc>
                                   <h3>Product Name</h3>
                                   <h5><Icon.StarFill color="gold" size={17}></Icon.StarFill><Icon.StarFill color="gold" size={17}></Icon.StarFill><Icon.StarFill color="gold" size={17}></Icon.StarFill><Icon.StarFill color="gold" size={17}></Icon.StarFill><Icon.StarHalf color="gold" size={17}></Icon.StarHalf></h5>
                                   <div>are not praying. Your body can be in any condition</div>
                               </Cartdesc>
                        </Cartimagecontent>
                           <Cartinput>

                               <input className="form-control" type="number" min="1" />

                           </Cartinput>
                             <Cartprice>$100</Cartprice>



                     </Cartbody>




                     <Cartbody>
                        <Cartimagecontent>
                              <Cartimg carting={Cart}></Cartimg>
                               <Cartdesc>
                                   <h3>Product Name</h3>
                                   <h5><Icon.StarFill color="gold" size={17}></Icon.StarFill><Icon.StarFill color="gold" size={17}></Icon.StarFill><Icon.StarFill color="gold" size={17}></Icon.StarFill><Icon.StarFill color="gold" size={17}></Icon.StarFill><Icon.StarHalf color="gold" size={17}></Icon.StarHalf></h5>
                                   <div>are not praying. Your body can be in any condition</div>
                               </Cartdesc>
                        </Cartimagecontent>
                           <Cartinput>

                               <input className="form-control" type="number" min="1" />

                           </Cartinput>
                             <Cartprice>$100</Cartprice>



                     </Cartbody>


















                 </Cartcontainer>
        


                 <Totalrecord>
                    <table className="table">
                         <tbody>

                            <tr>
                              <th>Subtotal</th>  

                                <td>$100</td>

                            </tr>

                            <tr>
                              <th>Tax</th>  

                                <td>$10</td>

                            </tr>
                            <tr>
                              <th>Total</th>  

                                <td>$110</td>

                            </tr>
                          

                         </tbody>
                    </table>
                 </Totalrecord>
            </Cartholder>  
            <Footer />          
        </div>
    )
}


const Totalrecord = Styled.div`
 width:100%;
 height:400px;
 display:flex;
 align-items:center;
 justify-content:flex-end;
 align-items:center;



table{
width:39%;

}

 @media (max-width:900px){
    min-height:50px;


 }

`;

const Cartimg = Styled.div`
width:40%;
height:100%;
background-image:${props=>`url(${props.carting})`};
background-position:center;
background-size:cover;
background-repeat:no-repeat;

`;
const Cartdesc = Styled.div`
width:45%;
height:100%;
text-align:left;
padding-left:5px;


h3{
font-size:25px;
font-weight:bolder;
padding-top:5px;
@media (max-width:900px){
  font-size:13px;


}

}

h5{
font-size:14px;
display:flex;
font-weight:bold;

}

div{
 font-size:12px;


}





`;
const Cartprice  = Styled.div`
width:33%;
height:40%;
display:flex;
justify-content:center;
align-items:center;
@media (max-width:900px){
    width:15%;
  
  
  }



`;
const Cartimagecontent = Styled.div`
width:70%;
height:40%;
display:flex;
flex-direction:row;




`;
const Cartinput = Styled.div`
width:20%;
height:40%;
display:flex;
justify-content:center;
align-items:center;

input{
    width:50%;
  height:25%;
  @media (max-width:900px){
    width:60%;
  
  
  }


}


@media (max-width:900px){
    width:30%;
  
  
  }


`;
const Cartbody = Styled.div`
width:100%;
height:300px;
display:flex;
flex-direction:row;
margin-top:10px;
margin-bottom:-180px;
@media (max-width:900px){
 margin-top:30px;



}

`;
const Span1 = Styled.div`
width:50%;
text-align:center;

`;
const Span2 = Styled.div`
width:20%;
text-align:center;
`;
const Span3 = Styled.div`
width:20%;
text-align:center;

`;
const Cartbar = Styled.div`
width:100%;
height:40px;
background-color:coral;
display:flex;
align-items:center;
justify-content:space-around;
font-size:20px;
color:#ffffff;


@media (max-width:900px){
    height:80px;
  
  
  }


`;
const Cartcontainer = Styled.div`
width:100%;
min-height:100%;
margin-bottom:-300px;

@media (max-width:900px){
    padding-left:2px;
    padding-right:1px;
  
  
  }


`;

const Cartholder = Styled.div`
width:100%;
min-height:100vh;
padding:20px 200px;

@media (max-width:900px){
    padding:0px 1px;
  
  
  }

`;




export default Maincart
