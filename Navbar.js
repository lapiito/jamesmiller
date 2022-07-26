import React , {useState} from 'react';
import Styled from 'styled-components';
// import '../bootstrap/dist/css/bootstrap.css'
import * as Icon from 'react-bootstrap-icons';
import Search_menu from './Search_menu';
// import Cart_container from './Cart_container';
import { Link }  from 'react-router-dom';
// import Eventmanager from './pages/Eventmanager';


function Navbar({branding,home, ministries,features,events,search}) {

const [searchers,setsearchers] =  useState(false)
const [cart,setcart] =  useState(false)
const searchOptions = () =>{
  setsearchers(!searchers)
}
const cartOptions = () =>{
  setcart(!cart)  
}





    return (
        // <div className="container-fluid">
<div className="row p-0 m-0">

 <nav className="navbar navbar-expand-lg navbar-light position-fixed w-100 top-0 left-0" style={{minHeight:80,backgroundColor:'#FBEAEB',zIndex:40}}>
  <div className="container-fluid " style={{zIndex:-40}}>
    <a className="navbar-brand" style={{color:'#2F3C7E',marginLeft:15,fontSize:30,fontWeight:'bolder'}} href="#">{branding}</a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav" style={{marginRight:150,display:'flex',alignItems:'center',justifyContent:'center',paddingLeft:150}}>
      
        <Link to="/"  style={{textDecoration:'none'}}><Listing className="nav-link active" style={{color:'#243665',fontWeight:600}}  aria-current="page" href="#">{home}</Listing></Link>
      <Link to="/sermon" style={{textDecoration:'none'}}><Listing className="nav-link " style={{color:'#243665',fontWeight:600}}  href="#">{features}</Listing></Link>  
      <Link to="/ministries" style={{textDecoration:"none"}}><Listing className="nav-link"  style={{color:'#243665',fontWeight:600}} href="#">{ministries}</Listing></Link>  
        <Link to="/events" style={{textDecoration:"none"}}><Listing className="nav-link" style={{color:'#243665',fontWeight:600}}> {events}</Listing></Link> 
          
        <Listing className="nav-link"  style={{color:'#243665',fontWeight:600, transform:"rotate(90deg)"}} onClick={searchOptions} href="#"><Icon.Search size={30} /></Listing>
      <Link to="/cart"><Listing className="nav-link" style={{color:'#243665',fontWeight:600,cursor:'pointer'}}><Icon.Basket2 onClick={cartOptions} size={30} /></Listing></Link> 
      
 </div>
    </div>
  </div>
</nav> 




  {/* {cart ? <Cart_container></Cart_container> : ''} */}
  { searchers? <Search_menu></Search_menu> : ''}
  



</div>

        // </div>
    )
}



const  Listing = Styled.div`
 padding:10px;
 font-size:18px;
 @media (min-width: 800px){
    margin-right:20px;

 }
`;






// const Lists = Styled.div`
//  align-items:end;
//  margin-left:20px;


  

// `;



// const ListContainer = Styled.div`
//  diplay:flex;
//  align-items:center;
//  justify-content:center;
//  flex:1



// `;

// const Container = Styled.div`
// width:100%;
// height:100%;
//  diplay:flex;
//  align-items:center;
//  justify-content:center;
// flex:1;
// flex-direction:row;


// `;




export default Navbar
