# Project Overview

## Project Links

- [Project Page on Github](https://github.com/Cody-Durham/project2-api-calls/blob/main/README.md)

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

- [wireframes](https://wireframepro.mockflow.com/view/green-proj2-wireframe)
- [react architecture](https://sitemap.mockflow.com/view/green-proj2-architecture)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Display current weather for desired rivers
	- Id like to have a couple search types, zipcode, or by city.
	- There will also be links to many of the rivers in Colorado for faster UI to explore
    - NOTE: I might look into integrating another API for valid rivers in CO so I dont have to hard code any by hand. 
- Navbar with options that link to their corresponding pages
- Will be designed for use on mobile and desktop

#### PostMVP EXAMPLE

- It might be nice to be able to have a 'save' feature on the app where you could see the rivers you fish often so you wouldnt have to put the zip or scroll to see if everytime. 

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | Sets up app with React Router | 
| Header | Renders the header, including the nav | 
| Footer | Renders the footer |
| Main | Contains Switch/Routes for content |
| Gameboard | Renders the trivia game, contains score as state |
| Question | Renders current question via API call and Answer components |
| Answer | Renders a possible answer using props from Question |
| Score | Renders player's score received through props |
| HighScore | Form that renders at end of game if the player achieves a high score |
| Options | Renders a form of selectable game options |
| Instructions | Renders rules and info about the game |
| Leaderboard | Renders list of top scorers via API call |

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

Unless otherwise noted, time is listed in hours:

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create React app and files for all components | H | 1 | time | time |
| Basic Navbar & Footer | H | 1 | time | time |
| Set up basic React routing | H | 1 | time | time |
| Make trivia API call, parse important data | H | 2 | time | time |
| Display questions and selectable answers, change on submit | H | 3 | time | time |
| Create logic to test for correct answer | H | 1 | time | time |
| Allow only one answer to be selected per question | H | 1 | time | time |
| Keep track of score | H | 2 | time | time |
| Style game display - basic | H | 2 | time | time |
| Make game display dynamic | H | 1 | time | time |
| Create game options form | H | 3 | time | time |
| Incorporate selected options into API call | H | 1 | time | time |
| Add content for instructions page | H | 1 | time | time |
| Make Navbar dynamic using ReactStrap | H | 1 | time | time |
| Learn how to use Firebase | M | 4 | time | time |
| Add submit your score form to end of game | M | 3 | time | time |
| Create leaderboard, populate locally | M | 3 | time | time |
| Update and populate leaderboard using Firebase | M | 3 | time | time |
| Create multiple leaderboards, based on selected difficulty | L | 3 | time | time |
| Additional styling for game (progress bar, etc.) | L | 4 | time | time |
| Additional styling for Navbar, Footer, other pages | L | 4 | time | time |
| Total | H | 45 | 44 | 44 |

## Additional Libraries
- Will include libraries as they are used

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  Code snippet should not be greater than 10 lines of code.

The below code is how the leaderboard is populated. The shorter the name, the more dots are added between the name and score. The font size is set progressively smaller for each entry.

```
let fontSize = props.gameView ? 24 : 42

scoreList = props.highScores.map((highScore, i) => {
	let dots = ' . . . '   
	for (let j = highScore.name.length; j < 12; j += 2) {
		dots += '. '
	}
	if (i > 0) {
		let mult = (i < 3 ? 2 : 1)
		props.gameView ? fontSize -= 1 * mult : fontSize -= 3 * mult
	}
```
...
```
	return (
		<li style={{fontSize: `${fontSize}px`, color: color}} key={i}>
			<span className="bold">{`${i + 1}) `}</span>
			{highScore.name} {dots} {highScore.score}
		</li>
	) 
})
```
# Project Overview

## Project Links

- [https://github.com/adgreenie/react.git](https://github.com/adgreenie/react.git)
- [https://answer10.web.app/](https://answer10.web.app/)

## Project Description

For this project, I plan to make a multiple-choice trivia game. I will use React's Link and Source to provide access to instructions, the game itself, and a leaderboard. The questions and possible answers will be populated using an API call. The leaderboard will be stored on a Google Sheet and also viewed through an API call.

## API

https://opentdb.com/api.php?amount=10


```
{
"category": "Entertainment: Music",
"type": "multiple",
"difficulty": "medium",
"question": "Johnny Cash did a cover of this song written by lead singer of Nine Inch Nails, Trent Reznor.",
"correct_answer": "Hurt",
"incorrect_answers": [
"Closer",
"A Warm Place",
"Big Man with a Gun"
]
},
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [wireframes](https://wireframepro.mockflow.com/view/green-proj2-wireframe)
- [react architecture](https://sitemap.mockflow.com/view/green-proj2-architecture)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Fully functional, interactive, trivia game
	- Questions/possible answers populated by API call
	- Tells player if selected answer is correct
	- Keeps track of score
- Navbar with options that link to their corresponding pages
- Options page that allows player to select trivia theme/difficulty
- Instructions page

#### PostMVP EXAMPLE

- Leaderboard that is updated using Firebase
- Create multiple leaderboards depending on selected difficulty

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | Sets up app with React Router | 
| Header | Renders the header, including the nav | 
| Footer | Renders the footer |
| Main | Contains Switch/Routes for content |
| Gameboard | Renders the trivia game, contains score as state |
| Question | Renders current question via API call and Answer components |
| Answer | Renders a possible answer using props from Question |
| Score | Renders player's score received through props |
| HighScore | Form that renders at end of game if the player achieves a high score |
| Options | Renders a form of selectable game options |
| Instructions | Renders rules and info about the game |
| Leaderboard | Renders list of top scorers via API call |

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

Unless otherwise noted, time is listed in hours:

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create React app and files for all components | H | 1 | 40min | 40min |
| Basic Navbar & Footer | H | 1 | 45min | 45min |
| Set up basic React routing | H | 1 | 30min | 30min |
| Make trivia API call, parse important data | H | 2 | 1.5 | 1.5 |
| Display questions and selectable answers, change on submit | H | 3 | 4 | 4 |
| Create logic to test for correct answer | H | 1 | 35min | 35min |
| Allow only one answer to be selected per question | H | 1 | 1 | 1 |
| Keep track of score | H | 2 | 2 | 2 |
| Style game display - basic | H | 2 | 3 | 3 |
| Make game display dynamic | H | 1 | 1 | 1 |
| Create game options form | H | 3 | 3 | 3 |
| Incorporate selected options into API call | H | 1 | 1.5 | 1.5 |
| Add content for instructions page | H | 1 | 1 | 1 |
| Make Navbar dynamic using ReactStrap | H | 1 | 1 | INC |
| Learn how to use Firebase | M | 4 | 3 | 3 |
| Add submit your score form to end of game | M | 3 | 2 | 2 |
| Create leaderboard, populate locally | M | 3 | 3 | 3 |
| Update and populate leaderboard using Firebase | M | 3 | .5 | INC |
| Create multiple leaderboards, based on selected difficulty | L | 3 | 0 | INC |
| Additional styling for game (progress bar, etc.) | L | 4 | 5 | 5 |
| Additional styling for Navbar, Footer, other pages | L | 4 | 9 | 9 |
| Total | H | 45 | 44 | 44 |

## Additional Libraries
ReactStrap - responsive navbar, progress bar for game
Firebase - updating and retrieving leaderboard

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  Code snippet should not be greater than 10 lines of code.

The below code is how the leaderboard is populated. The shorter the name, the more dots are added between the name and score. The font size is set progressively smaller for each entry.

```
let fontSize = props.gameView ? 24 : 42

scoreList = props.highScores.map((highScore, i) => {
	let dots = ' . . . '   
	for (let j = highScore.name.length; j < 12; j += 2) {
		dots += '. '
	}
	if (i > 0) {
		let mult = (i < 3 ? 2 : 1)
		props.gameView ? fontSize -= 1 * mult : fontSize -= 3 * mult
	}
```
...
```
	return (
		<li style={{fontSize: `${fontSize}px`, color: color}} key={i}>
			<span className="bold">{`${i + 1}) `}</span>
			{highScore.name} {dots} {highScore.score}
		</li>
	) 
})
```
