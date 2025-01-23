import './header.css'

function Header(){
    return(
        <>
        <nav className="navbar">
            <h1 className="logo">Abdul Rehman</h1>
            <div className="navItemsParent">
                <div className="navItems navItem1">Our Projects</div>
                <div className="navItems navItem2">Our Team</div>
                <div className="navItems navItem3">Our Vision</div>
                <div className="navItems navItem3">About</div>
                <div className="navItems navItem4">Contact Us</div>
            </div>
        </nav>
        </>
    )
}

export default Header