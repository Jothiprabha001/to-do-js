import Contents from "./Contents";
import Footer from "./Footer";
import Additem from "./Additem";
import Header from "./Header";
import './App.css';
//use state react hooks
import { useState, useEffect } from 'react';
import React from 'react';
import SearchItem from "./SearchItem";
import apiRequest from "./apiRequest";


function App() {
  //api url in an variable 
  const API_URL = 'http://localhost:3500/itmes';

  //creating array using useState
  //to avoid app crashing adding empty array
  //const [items,setItems] = useState(JSON.parse(localStorage.getItem('todo_list)) || []);  //without useEffect
  const [items, setItems] = useState([]);

  //array destructuring
  //creating variable to store the input values from the user using useState hook
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect( () => {
    const fetchItems = async () => {
      try{
        const response = await fetch(API_URL);
        if(!response.ok) throw Error("Data not received");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      }catch(err) {
        console.log(err.stack);
        
        console.log(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())()    
    }, 1000)

   // JSON.parse(localStorage.getItem('todo_list'))
   
  }, [])

  //additem function
  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item }
    const listItems = [...items, addNewItem]
    setItems(listItems)

    const postOptions = {
      method : 'POST',
      headers : {
        'Content-Type':'application/json'
      },
      body : JSON.stringify(addNewItem)
    }
    const result = await apiRequest(API_URL,postOptions)
    if(result) setFetchError(result) 
  }

  //handling checkbox state change
  const handleCheck = async (id) => {
    //array created to save the changed state
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item)
    //storing the array value into setItems in useState(hook)
    setItems(listItems);

    const myItem = listItems.filter(item => item.id===id)
    const updateOptions = {
      method : 'PATCH',
      headers : {
        'Content-Type':'application/json'
      },
      body : JSON.stringify({checked:myItem[0].checked})
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl,updateOptions)
    if(result) setFetchError(result) 

  };

  //handling delete button
  const handleDelete = async (id) => {
    const listItems = items.filter((item) =>
      item.id !== id)
    setItems(listItems);
    //to store the updated array into local storage   
    //localStorage.setItem("todo_list",JSON.stringify(listItems))

    const deleteOptions = {
      method : 'DELETE'
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl,deleteOptions)
    if(result) setFetchError(result)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted')
    if (!newItem) return;
    console.log(newItem)
    addItem(newItem)
    //emptying the input box after clicking submit
    setNewItem('')
  }

  return (
    <div className="App">
      <Header title="To Do List" />
      <Additem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <main>
        {isLoading && <p> Loading Items...</p>}
        {fetchError && <p> {`Error: ${fetchError}`}</p>}
        {!isLoading && !fetchError && <Contents
          items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main>

      <Footer
        length={items.length}
      />
    </div>
  );
}

export default App;
