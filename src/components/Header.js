import React from 'react'
import NavigationBar from './NavigationBar'
import Tabs from './Tabs'

const Header = () =>{
    return (
        <header className="bg-success container-fluid text-light">
            <NavigationBar />
            <Tabs />
        </header>
    )
}

export default Header