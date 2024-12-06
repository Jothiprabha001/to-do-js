import React from 'react'
import ItemsList from "./ItemsList";

const Contents = ({ items, handleCheck, handleDelete, }) => {


    return (
        <main>
            {(items.length) ? (
                < ItemsList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p style={{ marginTop: '2rem' }} > Your List is Empty</p>
            )
            }

        </main >
    )
}

export default Contents





