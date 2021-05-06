import React from 'react';
import {useState,useEffect} from 'react'
import riversArr from '../riversArr'

// setRiverInfo({ weather: data, river: riverInfo })

const RiverWeather = (props) => {
    const apiKey = 'aa935301c915ffe8a819f0d6177a4bf7'
    const apiLocation = props.match.params.zip
    // const apiWeather = props.match.params.main.temp
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${apiLocation},us&appid=${apiKey}`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${apiLocation},us&units=imperial&appid=${apiKey}`
    
    const [riverInfo, setRiverInfo] = useState(null)
    // const temp = riverInfo.main.temp;
    // const wind = riverInfo.wind.speed;
    

    // console.log(riverInfo.main.temp);
    
    //  const [riverPic, setRiverPic] = useState(null)
    
    //NOTES: 
    //can I loop over the riversArr here and pull out the images?
    //then I can set the new state to use that picture?
    //looping over the riversArr and returning the images
    
    //  const filterRiverArr = riversArr.filter( () => RiverWeather.name === props.match.params.name)
    //  console.log(filterRiverArr)
    //  const test = 1
    //  console.log(test);
    
    //  const animals = ['cat', 'emu', 'dog', 'horse', 'panda', 'turtle']
    //  const filterAnimals = animals.filter( word => word.length <= 5)
    //  console.log(filterAnimals)
    
    const getData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        
        setRiverInfo(data)
        
        //  console.log(riverInfo.main.temp)
        
        //  let newPic = riversArr.includes(riversArr[0].zip)
        //  let newPic2 = riversArr.includes(riversArr[0].zip)
        //  setRiverPic(newPic)
        
        //   console.log(data)
        //   console.log(newPic)
        //   console.log(newPic2)
        //   console.log(riversArr[0].zip)
        //   console.log('river image', riversArr[0].zip)
        //   console.log(riverPic);
        // console.log(data.main.temp);
    }
    
    useEffect( () => {getData()}, [])
    // If the page loads then this will log.. otherwise it throws an error
    // console.log(riverInfo.main.temp);
     
     const loaded = (props) => {
    
        const temp = riverInfo.main.temp;
        const wind = riverInfo.wind.speed;
        console.log(temp);
        console.log(wind);

         return (
             <section>

                <div className="river-name-container">
                    <h1>{riverInfo.name} River</h1>
                </div>
                <div id="river-image">
                    <img src="https://captainzipline.com/wp-content/uploads/captain-zipline-ecology-arkansas-river.jpg" alt=""></img>
                    {/* <img src="{riverInfo.img}" alt=""></img> */}
                </div>
                <div id="river-weather-container">
               
                <div>
                    <h3>TEMP: {temp}</h3>
                    {/* <h3>TEST</h3> */}
                </div>
                <div>
                    <h3>WIND: {wind}</h3>
                    {/* <h3>box 2</h3> */}
                </div>
                </div>
                <div id="back-to-rivers-button-container">
                    <button className="button">Back to rivers</button>
                </div>

            </section>
        )
    }

    const loading = () => {
        return (
            <h1>Loading...</h1>
        )
    }
    return riverInfo ? loaded() : loading()
};

export default RiverWeather



