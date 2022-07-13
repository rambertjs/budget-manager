# Budget Manager

This project is an [Nx](https://nx.dev) monorepo, containing both frontend and backend for a budget management app.
Authentication is handled by [JWT](https://jwt.io) tokens, and all data is stored in a Postgres database through [Prisma](https://prisma.io).

## Technologies used

![Typescript](https://img.shields.io/badge/-Typescript-3178C6?logo=typescript&logoColor=white&style=for-the-badge)  
![React](https://img.shields.io/badge/-ReactJS-61DAFB?logo=react&logoColor=black&style=for-the-badge)  
![REST API](https://img.shields.io/badge/-Rest%20API-006E9D?style=for-the-badge)  
![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white&style=for-the-badge)  
![Prisma](https://img.shields.io/badge/-Prisma-2D3748?logo=prisma&logoColor=white&style=for-the-badge)

## Available scripts

_Before doing this, make sure to create an appropriate .env file (you can follow .env.example for that purpose)._

### `npm start`

Run app in development mode.
The frontend can be viewed at [http://localhost:4000](http://localhost:4000), while the API is hosted at port 3333 and proxied automatically.

### `npm run build`

Build the app for production.
App is built in the `dist` directory.
