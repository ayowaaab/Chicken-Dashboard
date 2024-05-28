# Chicken Dashboard Project

Welcome to the Chicken Dashboard Project! This README will guide you through the setup and usage of the project, which is built with ReactJS, TailwindCSS, MongoDB, and Express.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Overview

The Chicken Dashboard is a web application designed to manage and monitor chicken farming activities. It provides a user-friendly interface to keep track of various aspects such as chicken health, feeding schedules, and farm inventory.

## Features

- **Dashboard**: Overview of the farm's current status.
- **Chicken Management**: Add, update, and delete chicken records.
- **Feeding Schedule**: Manage feeding times and amounts.
- **Inventory Management**: Track supplies and equipment.
- **Reports**: Generate reports on farm activities.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm or yarn
- MongoDB

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/chicken-dashboard.git
   cd chicken-dashboard
   ```

2. **Install server dependencies:**

```bash
cd server
npm install
```

3. **Install client dependencies:**

```bash
cd ../client
npm install
```

4. **Set up environment variables:**

Create a **.env** file in the server directory and add the following:

```js
PORT = 5000;
MONGO_URI = your_mongo_db_connection_string;
```

## Usage

1. **Start the server:**

```bash
cd server
npm start
```

2. **start the client:**

```bash
cd client
npm start
```

3. **Open the application:**
   Navigate to http://localhost:3000 in your browser.

## Project Structure

```bash
chicken-dashboard/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── tailwind.config.js
│   └── ...
├── server/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   └── ...
├── README.md
└── package.json
```

## Available Scripts

In the client directory, you can run :

- **`npm start`** : Starts the development server.
- **`npm build`** : Builds the app for production.
- **`npm test`** : Runs tests.
  In the server directory, you can run:
- **`npm start`** : Starts the Express server.
- **`npm test`** : Runs server-side tests.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or suggestions.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
4. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/ayowaaab) file for details.

## Contact

For any questions or suggestions, feel free to reach out to:

- **Ayoub Dahmen** - ayoub1dahmen@gmail.com
- [Github Issues](https://github.com/ayowaaab/Chicken-Dashboard/issues)
