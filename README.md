# Project Overview

## Project Links

- [Project Page on Github](https://github.com/Cody-Durham/project2-api-calls/blob/main/README.md)
- [Site Deployed Here](https://flamboyant-archimedes-058278.netlify.app)

![Working example of the GoFish App ](https://media.giphy.com/media/uzakXuIvfW4Raq3PdL/giphy.gif)
## Project Description

For this project, I plan to make a weather driven app that will display the current weather for different zipcodes that correspond to rivers to fish. Using a weather data API the user will be able to click on a name of a river to fish and find out weather conditions. Fish in the sun, snow, wind, now we can know before we go. <br>
NOTE: This is only avaiable in mobile view.<br>
![Fishing the Blue in Colorado morning ](https://res.cloudinary.com/dhad6e9gj/image/upload/v1619666522/Project%202_API%20Calls/IMG_6573_b_ykghcx.jpg)



## API

- [Open Weather Data API](https://openweathermap.org/current#name)
- [Example of accessing the API @ Loveland](https://res.cloudinary.com/dhad6e9gj/video/upload/v1620357272/Project%202_API%20Calls/Screen_Recording_2021-05-06_at_9.11.54_PM_qbvowg.mov)


```
{
"coord": {},
"weather": [],
"base": "stations",
"main": {},
"visibility": 10000,
"wind": {},
"clouds": {},
"dt": 1619664126,
"sys": {},
"timezone": -21600,
"id": 5574999,
"name": "Boulder",
"cod": 200
},
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [wireframe Homepage](https://res.cloudinary.com/dhad6e9gj/image/upload/v1619814221/Project%202_API%20Calls/Go_Fish_Wireframes-01_b4g4js.jpg)
- [wireframe River Selection](https://res.cloudinary.com/dhad6e9gj/image/upload/v1619814224/Project%202_API%20Calls/Go_Fish_Wireframes-03_w4lydi.jpg)
- [wireframe River Weather](https://res.cloudinary.com/dhad6e9gj/image/upload/v1619814225/Project%202_API%20Calls/Go_Fish_Wireframes-04_jsd6br.jpg)
- [Archiitecture](https://res.cloudinary.com/dhad6e9gj/image/upload/v1619814225/Project%202_API%20Calls/Go_Fish_Wireframes-05_yxlrea.jpg) 

## MVP
- Display 'home' page and be able to click "find weather" button to display rivers in Colorado
- Display current weather for desired rivers in Colorado based on hardcoded zip codes or city(location) pulled from API
- Navbar with options that link to their corresponding pages	
- Will be designed for use on mobile only

## PostMVP
- I might look into integrating another API for valid rivers in CO so I dont have to hard code any by hand. 
- Be able to use search box on home screen to search by state
- Be able to use search box on "river selection page" screen to search by zip code or river name
- It might be nice to be able to have a 'save' feature on the app where you could see the rivers you fish often so you wouldnt have to put the zip or scroll to see if everytime. 

## Components

| Component | Description | 
| --- | :---: |  
| App | Sets up app with React Router | 
| Header | Renders the logo and the (potential) hamburger menu | 
| Footer | Renders the footer (search bar) and input |
| Main | Contains Switch/Routes for content |
| River Selection | Shows names of Rivers to click on |
| River Weather | Shows weather for specific loaction |


Unless otherwise noted, time is listed in hours:

| Component Creation | Priority | Estimated Time | Time Invetsted |
| --- | :---: |  :---: | :---: |
| Logic into creating plan & wireframes for app | H | 4 | 6 |
| Create React app and files for all components | H | 2 | 3 |
| HOME page logic | H | 3 | 2 |
| Main page logic | H | 3 | 3 |
| River Weather page logic | H | 6 | 15 |
| Basic Navbar & Footer | H | 3 | 3 |
| Set up routing for all pages | H | 5 | 5 |
| React Nav bar completion | H | 3 | 3 |
| Create SVGs and use correctly | H | 2 | 4 |
| Styling with CSS | H | 8 | 10 |
| Total | H | 40 | 53 |

## Additional Libraries
- React, Router, Link

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description. <br>
- Nothing too special about this code below but I enjoyed figuring out how to target the 'type' and 'value' in the CSS to customize it away from its native appearance. 

```
 <div className='footer-color'>
            <form 
                className='search-form'
                onSubmit={handleSubmit}>

                <input 
                type='submit'
                value='🔍'>
                </input>
            </form>
        </div>
```
- This is some of the CSS styling for the search bar and icon in the app. 
```
input[type='submit'] {
    background-color: var(--primaryColor);
    border: none;
    margin-left:5px;
    border-radius: none;
    height: 28px;
}

input[type='submit']:active {
    transform: scale(1.2)
}
input[type='submit'] {
    -webkit-appearance: none;
    border-radius: none;
}
```
## Now go outside... and fish...
<p>
<img src='https://i.pinimg.com/originals/53/ed/56/53ed56fbf2ef2f98b0f15d80834681dc.jpg'/>
</p>