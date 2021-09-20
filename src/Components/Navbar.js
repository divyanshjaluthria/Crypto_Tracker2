import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar(props) {

  

  return (<>
    <div>
      <nav className="navbar navbar-light  color coin-search d-flex">
        <form className="form-inline " placeholder="">
          <Link to="/"><label className="navbar-brand">Crypto Tracker</label></Link>
          <input className="form-control mr-sm-2 bg-light coin-input" type="search" placeholder="Search Here...!!!🔍" aria-label="Search" onChange={props.handleOnChange} />
          
        </form>
      </nav>
    </div></>
  )
}

export default Navbar
