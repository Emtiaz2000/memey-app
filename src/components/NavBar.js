import React from 'react'
import {Link} from 'react-router-dom'

//image
import backArrow from '../images/icons/backArrow.svg'
/*Nav style  */
import './NavBar.css'

export default function NavBar() {
  return (
    <>
        <div className='Nav_container'>
            <nav>
                <Link to="/" className='Back_btn'> <img src={backArrow} alt="image"/> <span className='nav_back'>Back</span> </Link>
                <h2 className='nav_heading'>Connect Wallet</h2>
                <Link to="#" className='home_btn'>Home</Link>
            </nav>
        </div>
    </>
  )
}
