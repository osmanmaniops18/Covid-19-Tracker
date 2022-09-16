import React, { useEffect, useState } from "react";
import "./covid.css"

const Covid=()=>{
     const[data,setdata]=useState([]);
    const getCovidData= async()=>{
        try{
            const resp= await fetch('https://covid19.mathdro.id/api');
           const actualData= await resp.json();
          
          
           setdata(actualData);
           
        } catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
    getCovidData();
    },

    []);

    
    return(
        <>
        <section>
            <h3 className="status"> 📌Live</h3>
            <h1 className="status">Covid-19 CaronaVirus Tracker</h1>
            <div class="card">
  <div className="container">
    <h1>Confirmed Case</h1> 
    <h2>{data.confirmed.value}</h2> 
    
  </div>
</div>
    <div class="card2">
  <div className="container">
    <h1>Recovered Case</h1> 
    <h2>{data.recovered.value}</h2> 
    
  </div>
</div>
    <div class="card3">
  <div className="container">
    <h1>Deaths Case</h1> 
    <h2>{data.deaths.value}</h2> 
    
  </div>
</div>
 <div class="card4">
  <div className="container">
    <h1>Update</h1> 
    <h2>{new Date(data.lastUpdate).toDateString()}</h2> 
    
  </div>
</div>
</section>

        </>
    );
}
export default Covid;