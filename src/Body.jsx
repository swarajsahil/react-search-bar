import React,{useEffect,useState} from "react";
import Card from './Card';
import Shimmer from "./Shimmer";
const Body = () => {
    const [apiData,setApiData]=useState([]);
    const [searchableData,setSearchableData]=useState([])
    const [inputText,setInputText]=useState("");

    function filterData(){
        const filterCard=searchableData.filter((data)=>{
            return data?.fullName?.toLowerCase()?.includes(inputText.toLowerCase());
        })
        setApiData(filterCard);
    }

    async function gotApi(){
        const gotData=await fetch(`https://thronesapi.com/api/v2/Characters`);
        const jsonData=await gotData.json();
        setApiData(jsonData);
        setSearchableData(jsonData);
    }
    useEffect(()=>{
        gotApi();
    },[])
  return (apiData.length===0) ?  (<div className="blur-container">
    <Shimmer/><Shimmer/><Shimmer/>
    <Shimmer/><Shimmer/><Shimmer/>
    <Shimmer/><Shimmer/><Shimmer/>
    <Shimmer/><Shimmer/><Shimmer/>
  </div>) 
  :(
    <>
    <div className="control">
            <input type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)} />
            <button onClick={()=>{
                filterData();
                setInputText("");
            }}>Search</button>
        </div>
    <div className="container">
      {
        apiData.map((data)=>{
          return <Card {...data} key={data.id}/>
        })
      }
    
    </div></>
  )
}

export default Body