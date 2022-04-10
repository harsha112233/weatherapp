import React,{useState,useEffect} from 'react';

import './App.css';
import Weather from './Weather';
import './weather-icons-master/weather-icons-master/css/weather-icons.min.css';
function App() {
  const[searchcity,setsearchcity]=useState("solapur");
  const[tempdata,settempdata]=useState({});
  const[cityname,setcityname]=useState();
 useEffect(()=>{
    getdata();
  },[])
   
  async function getdata(){
   try{ 
     var data1=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchcity}&units=metric&appid=687dd8f716b13ad1c5c37ff9fd5ccd73`)
    var data=await data1.json();
    
    const{temp,humidity,pressure}=data.main;
   const{main:weathermood}=data.weather[0];
   const{name}=data;
   const{speed}=data.wind;
   const{country,sunset}=data.sys;
   const newtemp={temp,humidity, pressure,weathermood,name,speed, country, sunset}
   
   settempdata(newtemp);
   setcityname(newtemp.name);
   
   
   }
   catch(error){
     console.log(error)
   }
 
  }
  return (

   <>
    <div className="container-fluid">
      <div className="row mt-5">
      <div className="col-sm-6  mx-auto">
      <div className="input-group mb-3 ">
  <input type="text" className="form-control" placeholder="Search name..." aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e)=>setsearchcity(e.target.value)}/>
  <span className="input-group-text" id="basic-addon2" onClick={getdata}>Search</span>
    </div>
    </div>
    </div>
     </div>
     <Weather tempdata={tempdata}/>
     
     
   
   </>
   
  );
}

export default App;
