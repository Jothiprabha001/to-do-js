import React from 'react'
import LineItem from './LineItem'

const ItemsList = ({ items, handleCheck, handleDelete }) => {
    return (
        < ul >
            {/* mapping the list elements using useState(hook)) */}
            {items.map((item) => (
                <LineItem
                    item={item}
                    key={item.id}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />

            ))}

        </ul>
    )
}

export default ItemsList