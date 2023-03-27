import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger, SignUpLink } from './navElement'
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
                        Create_Product
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