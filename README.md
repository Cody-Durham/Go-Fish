# Project Overview

## Project Links

- [Project Page on Github](https://github.com/Cody-Durham/project2-api-calls/blob/main/README.md)
- [Site Deployed here on Netlify](https://flamboyant-archimedes-058278.netlify.app)

## Project Description

For this project, I plan to make a weather driven app that will display the current weather for different zipcodes that correspond to rivers to fish. Using a weather data API the user will be able to click on a name of a river to fish and find out the weather. Fish in the sun, snow, wind, now we can know before we go. <br>
![Fishing the Blue in Colorado morning ](https://res.cloudinary.com/dhad6e9gj/image/upload/v1619666522/Project%202_API%20Calls/IMG_6573_b_ykghcx.jpg)

## API

- [Open Weather Data API here](https://openweathermap.org/current#name)
- [Example of accessing the API @ Loveland](http://api.openweathermap.org/data/2.5/weather?q=loveland&appid=aa935301c915ffe8a819f0d6177a4bf7)


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

| Component Creation | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Logic into creating plan & wireframes for app | H | 4 | 6 | time |
| Create React app and files for all components | H | 2 | time | time |
| HOME page logic | H | 3 | time | time |
| Main page logic | H | 3 | time | time |
| River Weather page logic | H | 6 | time | time |
| Basic Navbar & Footer | H | 3 | time | time |
| Set up routing for all pages | H | 5 | time | time |
| React Nav bar completion | H | 3 | time | time |
| Create SVG log and import | H | 2 | time | time |
| Styling with CSS | H | 8 | time | time |
| Total | H | 40 | time | time |

## Additional Libraries
- Will include libraries as they are used

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  Code snippet should not be greater than 10 lines of code.

The below code is how the leaderboard is populated. The shorter the name, the more dots are added between the name and score. The font size is set progressively smaller for each entry.

```
code snippet TBD
```
...
```
code snippet TBD
```
