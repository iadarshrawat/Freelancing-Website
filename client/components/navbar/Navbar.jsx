import React, { useState } from 'react'
import "./Navbar.scss"
import { Link } from "react-router-dom"

function Navbar() {

    const [open, setOpen] = useState(false);

    const currentUser = {
        id:1,
        usename:"john Doe",
        isSeller:true
    }

    return (
        <div className='navbar'>
            <div className="container">
                <div className="logo">
                    {/* <Link to='/'> */}
                        <span className='text'>fiverr</span>
                    {/* </Link> */}
                    <span className='dot'>.</span>
                </div>
                <div className="links">
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign in</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div className="user" onClick={()=>setOpen(!open)}>
                            <img src="" alt="" />
                            <span>{currentUser.usename}</span>
                            { open && (
                                <div className="option">
                                {currentUser?.isSeller && (
                                        <>
                                            <span>Gigs</span>
                                            <span>Add new Gig</span>
                                        </>
                                )}  
                                <span>Orders</span>                            
                                <span>Messages</span>                            
                                <span>Logout</span>                            
                            </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <hr />
            <div className="menu">
                <span>Test</span>
                <span>Test2</span>
            </div>
        </div>
    )
}

export default Navbar