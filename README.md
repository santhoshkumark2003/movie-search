# Movie Search — FSD-MERN Session Task

A simple movie search application built as a MERN stack session task. Allows users to search movies (client) and fetch data via a minimal Express API (server).

## Features
- Search movies by title using OMDb API
- Responsive React UI
- Basic error handling and loading states

## Tech stack
- Frontend: React (Create React App / Vite)
- External API: OMDb
- Dev tooling: npm / yarn

## Repo structure (example)
- client/ — React app
- README.md

## Prerequisites
- npm or yarn
- API key for OMDb

## Environment variables (example)
Create a .env in server/ and/or client/ as needed:

server/.env
```
PORT=5000
OMDB_API_KEY=your_omdb_api_key
```

client/.env
```
REACT_APP_API_URL=http://localhost:5000
REACT_APP_OMDB_API_KEY=your_omdb_api_key
```

## Setup & run (local)
1. Clone repository
    ```
    git: https://github.com/santhoshkumark2003/movie-search
    ```
2. Server
    ```
    cd server
    npm install
    npm run dev   # or npm start
    ```
3. Client
    ```
    cd ../client
    npm install
    npm start     # or npm run dev
    ```

Open the client (usually http://localhost:3000) and use the search UI.

## API (example endpoints)
- GET /api/movies/search?q={query} — search movies (proxied to OMDb)
- GET /api/movies/:id — get movie details

Adjust endpoints to match your server implementation.

## Testing
- Run any unit/integration tests (if present):
  ```
  npm test
  ```

## Notes
- Keep API keys out of version control. Use .env and .gitignore.
- This README is a starting template — adapt commands and env variables to your exact setup.

## License
Include an appropriate license (e.g., MIT) or the course/project license.

