import { React, useState, useEffect } from 'react'
import Header from "./components/header";
import ProductBox from './components/ProductBox';
import './App.css'


function App() {
  const [getCount, UpdateCount] = useState(0);
  const AddToCartButton =()=>{
    UpdateCount((prevCount)=>{
      return ++prevCount
    })
  }

  const [getData, setData] = useState();

  async function handleFatch(){
    const data = await( await( fetch("https://www.sgcarena.com/wp-json/wp/v2/posts/?slug=honda-nsx-liberty-walk-14279"))).json();
    handleData(data[0].acf.mod_variant_repeater[0].mod_variant_file_repeater.file)
  }

  function handleData(data){
    setData(data);
  }

  useEffect(()=>{
    handleFatch();
  },[handleFatch]);

  return (
    <>
    <Header/>
    <ProductBox AddToCart={AddToCartButton} counter={getCount} auth_key={getData}/>
    </>
  )
}

export default App
