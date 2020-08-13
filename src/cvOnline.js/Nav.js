import React from 'react'


export const Nav = () => {
    return (
        <>
            <nav className=' nav-bar'>
                <ul className='nav'>
                    <a href='#Home'><li className='nav-link'>Home</li></a>
                    <a href='#Skills'><li className='nav-link'>Skils</li></a>
                    <a href='#Portfolio'><li className='nav-link'>Portfolio</li></a>
                    <a href='#About'><li className='nav-link'>About</li></a>
                    <a href='#Contacto'><li className='nav-link'>Contacto</li></a>
                    {/* <a href='./cv.pdf' download ><li className='nav-link btn btn-primary-outline'>Bajar CV</li></a> */}

                </ul>




                
            </nav>
        </>
    )
}
export default Nav;