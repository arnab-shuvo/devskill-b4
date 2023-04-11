import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger, SignUpLink,Bars } from './navElement'
const Navbar = () => {
    return (
        <>
            <PrimaryNav>
                <Hamburger />
                <Menu>
                    <MenuLink to="/" activeStyle>
                        Home
          </MenuLink>
                    <MenuLink to="/create-product" activeStyle>
                        Create Product
          </MenuLink>
                    <MenuLink to="/product-list" activeStyle>
                        Product
          </MenuLink>
                    <MenuLink to="/blog" activeStyle>
                        Blog
          </MenuLink>
                    <SignUpLink to="/signup" activeStyle>
                        SignUp
          </SignUpLink>
                    
                </Menu>
            </PrimaryNav>
        </>
    )
}
export default Navbar