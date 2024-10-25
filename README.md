
## Run Locally

Clone the project

```bash
  git clone https://github.com/BogomilDochev/task-management-tool.git
```

Go to the project directory

```bash
  cd task-management-tool
```

Copy the example environment file

```bash
  cp .env.example .env
```

Open the newly created .env file and fill in the required values
```bash
  MONGO_URI: "Your MongoDB connection URI"
  JWT_SECRET: "A secret key for signing JWT tokens"
  PORT: "The port number the application will run on (e.g., 8000)"
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  nodemon app.js
```

