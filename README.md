
---

# Data Visualization Dashboard

## Overview

This project is a data visualization dashboard built using the given JSON data (`jsondata.json`) which has been uploaded on MongoDB. The dashboard reads data from a database and displays interactive charts and graphs to provide insights into various important variables.

## Technologies Usedvenv- **Framework**: Flask
- **Database**: MongoDB
- **API**: Python

### Frontend
- **Framework**: Next.js with Typescript
- **Charts and Visualizations**: D3.js, Chart.js, Plotly.js

## Setup and Installation

### Prerequisites
- Python 3.x
- Node.js and npm
- MongoDBvenvSetup


1. Set up a virtual environment:
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

2. Install the required Python packages:
    ```bash
    pip install -r requirements.txt
    ```

3. Import JSON data into MongoDB:
    ```bash
    mongoimport --db <database-name> --collection <collection-name> --file jsondata.json --jsonArray
    ```

4. Run the Flask app:
    ```bash
    export FLASK_APP=app.py
    flask run
    ```

### Frontend Setup
1. Navigate to the client directory:
    ```bash
    cd client

    ```

2. Install the required npm packages:
    ```bash
    npm install
    ```

3. Start the React app:
    ```bash
    npm start
    ```

## Project Structure

```
.
├── venv
│   ├── app.py
│   ├── models.py
│   ├── routes.py
│   ├── requirements.txt
│   └── ...
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── Dashboard.js
│   │   │   ├── Filters.js
│   │   │   └── ...
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── public
│   ├── package.json
│   └── ...
├── jsondata.json
└── README.md
```

## API Endpoints

- **`GET /api/data`**: Fetches all data from the database.
- **`GET /api/data?filter=value`**: Fetches filtered data based on query parameters.

## Dashboard Features

### Visualized Variables
- Intensity
- Likelihood
- Relevance
- Year
- Country
- Topics
- Region
- City

### Filters
- End Year
- Topics
- Sector
- Region
- PEST
- Source
- SWOT
- Country
- City

### Interactive Visualizations
- Various charts and graphs created using nivo.

## How to Use
1. Star venv server using Flask.
2. Start the client server using React.
3. Open the dashboard in your browser (usually at `http://localhost:3000`).
4. Use the filters to interact with the data and generate insights through the visualizations.

## Screenshots 

<img width="1436" alt="Screenshot 2024-06-30 at 6 00 14 PM" src="https://github.com/parth9028/Voice-assistant/assets/172172946/a9c2c235-62c9-4409-829f-5b1e9e356396">

<img width="1436" alt="Screenshot 2024-06-30 at 6 04 23 PM" src="https://github.com/parth9028/Voice-assistant/assets/172172946/683c0ddc-d976-46b5-ab86-024d0832a90b">

<img width="1436" alt="Screenshot 2024-06-30 at 6 06 01 PM" src="https://github.com/parth9028/Voice-assistant/assets/172172946/d77000a4-c592-4b35-b542-b45f8d3b2972">
