This code requires 3 elements to work
in the files folder, it uses app.js and index.html
it also uses server.js to launch

index.html
this file creates the html page. 
the language is set to english
it sets the title of the page as "Reaction Timer"
it makes 2 buttons, the stop and start, both equal in size. the start button is green and the stop is grey
it creates a log for the people who play the game
it then does some css work to make nice input fields for first name, last name, and email

server.js
this file runs an Express.js server that runs the app on port 3030
it then creates an empty variable for fastestTime
it pulls the static files from my public folder
the app.post script creates an endpoint to extract the reactionTime
it also starts the server

app.js
this java script pulls the html elements from the index.html file, like the buttons and log fields
it sets several variables, notably:
- startTime is set as empty
- isReady is set to false (as in it's not in a ready state)
- it creates a 2 second penalty for clicking early 
it sets up the stop button
- it starts as grey, but is disabled
it sets up the start button and creates a function on clicking
- it doesnt allow you to click it if you havent entered your name and email though
- once clicked, the start button is disabled and greys out
- text shows up telling you to wait for it
- the start button is set to not ready (isReady=false)
- the stop button is enabled
- it should be mentioned that all of these happen simultaneously after clicking
- then, there is a random delay between one and twenty seconds
- after that random time elapses, it starts a timer and turns the stop button red 
- the stop button is then set to ready
the stop button is now active
- it's listening for a click
- if the stop button is not ready (meaning the random timer has not elapsed), it penalizes you the 2 seconds from the penalty and makes fun of you
- if the stop button is ready, it looks at the time between when you clicked it and when it became ready and records that as reactionTime
- it then prints your reaction time 
finally, the game resets, and you reaction time is logged
- the reset conditions are then listed, which are essentially the same as the starting conditions

