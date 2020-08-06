import React from 'react'
import '../header/style.css'
import ButtonLink from '../ButtonLink'

function Header() {
    return (
        <nav>
            <h1> Acessibility Flix </h1>
            <ButtonLink href="/" type="button" className="ButtonLink" >
               Prop específica da chieldren
            </ButtonLink>  
        </nav>
    )
} 

export default Header