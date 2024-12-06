import React from 'react'
//importing useState react hooks
import { useState } from 'react';


const Notes = () => {
    function handleNameChange() {
        const names = ["Earn", "Grow", "Make", "Give"];
        const int = Math.floor(Math.random() * 4);
        return names[int]
    }
    //simple onclick event
    const handleClick = () => {
        console.log('Thank you for your support');
    }


    //onclick event using parameter
    const handleClick2 = (name) => {
        console.log(`Thank you for your support ${name}`)
    }

    //handling objects in events
    const handleClick3 = (e) => {
        //to console some event happaned here
        console.log(e);
        // to console the targeted element
        console.log(e.target);
        //to console the inner Text of the targeted element
        console.log(e.target.innerText);
    }

    //calling useState hook
    function nameee() {
        return console.log("hello");

    }
    const [count, setCount] = useState(99);
    const [name1, setNamae1] = useState(() => nameee());


    function decrementFunction() {
        setCount(count - 1)
    }
    function incrementFunction() {
        setCount((count) => { return count + 1 })
    }

    //button click -> name change in <P>tag
    const [name, setName] = useState("Earn");
    function handleNameChange() {
        const names = ["Earn", "Grow", "Make", "Give"];
        const int = Math.floor(Math.random() * 4);
        setName(names[int])
    }

     //higher order functions -> applying filter & mapping list
     const numbers = [-2, -1, 0, 1, 2]
     const itemss = numbers.filter(n => n >= 0).map(n => ({ number: n }))
     console.log(itemss)

    return (
        <main>
            {/* button click -> name change in <P>tag using 
            useState hook and Click event */}
            <p>Let's {name} Money</p>
            <button onClick={handleNameChange}> Click Here </button>

            {/* double click event  */}
            <p onDoubleClick={() => handleClick2('Jo')}>Let's {handleNameChange()} Money</p>
            <button onClick={handleClick}> Submit </button>
            <button onClick={() => handleClick2('Joe')}> Submit </button>
            <button onClick={(e) => handleClick3(e)}> Submit </button>

            {/* <p>Lets Earn Money</p> */}
            <button> Subscribe</button>
            <button onClick={decrementFunction}>-</button>
            <span>{count}</span>
            <button onClick={incrementFunction}>+</button>
        </main>
    )
}

export default Contents






