# Pragmateam code challenge server (NodeJS)

Please refer to the provided document for the code challenge requirements. 

## Available scripts

- `npm start` - Start the application (Port 8081)
- `npm test` - Run application tests


## Improviments done in the Backend
- I have used Clean Architecture to design the back end code. It will help us in case the project grow and more complex can be added the Clean Architecture will help us keep the code maintainable
- Some Unit Tests has been added in order to test the code logic and be sure that in the next implementation if something break the tests it will hightlight any issue for us.
- Routes has been added for all temperatures.

## Improviments done in the Frontend
- Organize the compenents folder
- Create a Temperature component
- Added a tiny style.

## If I have more time
- If I have more time I would implement more and more refactoring in the backend but for sure I would create a better UI template with the company's logo for example.
- I would build a UI with Clean Architecture or other layered architecture, I thoughts is the Front End also deserve a good code organization it also needs to be maintainable.
- Maybe is a high priority feature, a notification system that we could put in the back end to send an alert when a not appropriate temperature is registered..
- Another approach that we could consider is using colour and image icons to express the temperature variation, i.e. red for a temperature that is not appropriate for the beer and X when the temperature for a specific beer is not registered. 