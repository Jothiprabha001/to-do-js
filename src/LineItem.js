import React from 'react'
//importing trash icon
import { FaTrash } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete }) => {

    return (
        <li className="item" key={item.id}>
            <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
            />
            <label
                style={ (item.checked) ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => handleCheck(item.id)}
            >{item.item}</label>

            {/* importing the icon svg  */}
            <FaTrash
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
                // label used for giving info about icon which is majorly used for
                //  seo, semmantics, some assist technologies, screen readers
                aria-label={`Delete ${item.item}`}
            />
        </li>
    )
}

export default LineItem