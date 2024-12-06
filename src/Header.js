import React from 'react'

const Header = (props) => {
    //css styling
    const headerStyle = {
        backgroundColor: 'plum', color: 'white'
    }
    return (
        //another method of inline css
        //<header style={{backgroundColor: 'plum', color:'white'}}>
        // inline css
        <header style={headerStyle}>
            <h1>{props.title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: "To Do List"
}
export default Header