import React from 'react'

const Footer = ({ length }) => {
    const year = new Date();
    return (
        <footer>
            {length} List {length <= 1 ? "Item" : "Items"}
            <br />
            Copyright &copy; {year.getFullYear()}
        </footer>
    )
}

export default Footer