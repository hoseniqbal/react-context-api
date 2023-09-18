import { data } from "autoprefixer";
import React,{useState} from "react";
import axios from 'axios';


const ProductBox = (props) =>{

  const [getData, setdata] = useState();
 
  async function handle_api(){
    // await fetch(`https://api.sgcarena.com/v1/file/${props.auth_key}`, 
    // {
    //   method: 'GET',
    //   credentials: 'include',
    //   mode: 'cors',
    //   headers:{
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*'
    //   }
    // })
    // .then(response=> response.json())
    // .then(data=> console.log(data));


    try {
      const response = await axios.get(`https://api.sgcarena.com/v1/file/${props.auth_key}`)
      console.log(response);
    } catch (error) {
      
    }

  }


  function handleData(data){
    setdata(data);
  }

  return(
    <>
      <button className="mt-10 flex text-white mx-auto p-2.5 rounded bg-fuchsia-500" onClick={handle_api}>AddToCart</button>
      <p className="text-center">{props.counter}</p>
    </>
  )
}

export default ProductBox;