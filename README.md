
## Description
This is a front-end side of the technical test that follows the requirement with the [Figma design](https://www.figma.com/proto/pynjT5AsIQ2GH5z9HnVZfb/Test?node-id=1%3A2&starting-point-node-id=1%3A2), check the live version [here](https://functional-test-front.netlify.app/), it is connected with the deployed version of the [backend API](https://github.com/MohammedAlghazali/functional-text-backend). 


## Built With
[React.js](https://reactjs.org/)

[TypeScript](https://www.typescriptlang.org/)

[React Router V6](https://reactrouter.com/)

[Material UI](https://mui.com/)

## Getting Started
To get your local version up and running please follow these steps:


### Prerequisites

You should have [Node.js](https://nodejs.org/en/) installed in your machine in order to be able to run the project.

### Installation
1- Clone the repo

```
git clone https://github.com/MohammedAlghazali/functional-text-frontend.git
```

2- Install NPM packages

```
npm install
```

3- If you want to run the project to be connected with the local backend server, please change the `REACT_APP_API_DOMAIN` in the `.env` file and add you local host.

EX: 
```
REACT_APP_API_DOMAIN=http://localhost:5000
```

4- Run the project using this command

```
npm run start
```

5- Your app is running now on [http://localhost:3000](http://localhost:3000)

### Deployment
The project is deployed on [netlify](netlify.com), the preview version is deployed when you create a new pull request, and the production deploys trigger after merge the branch to the main.