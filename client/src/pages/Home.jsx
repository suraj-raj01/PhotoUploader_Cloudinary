import Button  from 'react-bootstrap/Button'
import React, { useEffect } from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  useEffect(function(){
    navigate("/home")
  },[])

  return (
    <div>
      <h2>Upload Photos</h2>
      <br />
    <Button variant='outline-success'>
    <Nav.Link as={Link} to="insertphoto">Upload Photos</Nav.Link></Button>
    <div id='home-outlet'>
    <Outlet/>
    </div>
    </div>
  )
}

export default Home
