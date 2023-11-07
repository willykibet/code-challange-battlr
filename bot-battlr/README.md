Project README
This README provides instructions and information for the React application project, which involves creating a bot management system. Please follow the guidelines and instructions carefully to set up and complete the project successfully.

Instructions
For this project, you'll be building a React application that displays a list of available bots, among other features. Follow these steps to set up your project:

Project Setup
Create a new project folder.

Create a new GitHub repository and add your TM as a contributor (only for grading purposes).

Regularly commit your code to the repository.

In your project directory, create a db.json file and use the provided data for your server DB.

Run the following command to start the backend: json-server --watch db.json.

Test your server by visiting this route in the browser: http://localhost:8001/bots.

Project Guidelines
Your project should conform to the following set of guidelines:

Core Deliverables
As a user, you should be able to:

See profiles of all bots rendered in the BotCollection.
Add an individual bot to your army by clicking on it. The selected bot should render in the YourBotArmy component. The bot can be enlisted only once. The bot does not disappear from the BotCollection.
Release a bot from your army by clicking on it. The bot disappears from the YourBotArmy component.
Discharge a bot from their service forever by clicking the red button marked "x," which would delete the bot both from the backend and from the YourBotArmy on the frontend.
Endpoints for Core Deliverables
GET /bots
Example Response:

json

[
  {
    "id": 101,
    "name": "wHz-93",
    "health": 94,
    "damage": 20,
    "armor": 63,
    "bot_class": "Support",
    "catchphrase": "1010010101001101100011000111101",
    "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",
    "created_at": "2018-10-02T19:55:10.800Z",
    "updated_at": "2018-10-02T19:55:10.800Z"
  },
  {
    "id": 102,
    "name": "RyM-66",
    "health": 86,
    "damage": 36,
    "armor": 77,
    "bot_class": "Medic",
    "catchphrase": "0110011100000100011110100110011000011001",
    "avatar_url": "https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1",
    "created_at": "2018-10-02T19:55:10.827Z",
    "updated_at": "2018-10-02T19:55:10.827Z"
  }
]
DELETE /bots/:id
Example Response:

json
Copy code
{}
Advanced Deliverables
These deliverables are not required to pass the code challenge, but if you have the extra time or wish to continue working on the project, they are a great way to stretch your skills.

As a user, you should be able to:

Choose if you want to enlist a bot into your army or just see their data. Clicking on the card should instead display a show view (BotSpecs) for that bot, which should replace BotsCollection. BotSpecs should have two buttons: one to go back to the list view and another to enlist that bot.

Sort bots by their health, damage, or armor. For this, create a new component, SortBar.

When you enlist a bot, it will be removed from the BotCollection and added to YourBotArmy.

Filter bots by their class. You can select multiple filters at the same time.

Sort bots by their health, damage, or armor. For this, create a new component, SortBar.

Only enlist one bot from each bot_class. The classes are ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"].

Website URL
Please provide the link to the website you'd like to submit for this assignment.

Website URL: [Insert your website URL here]

Rubric
Please be aware that the project will be assessed based on the following criteria:

Props & State
Advanced deliverables are met.
State works and is held by the lowest common component. No unnecessary state is created. Only the necessary props are being passed down. Functions used to edit state are passed down.
Code Structure/Efficiency
Components are structured logically. Class components are only used when needed, functional components are used for everything else. Code is abstracted into clear methods. Used object destructuring and spread operator successfully.
Rendering
Renders everything asked for in the deliverables. Components are abstract and reusable. No unnecessary components were created.