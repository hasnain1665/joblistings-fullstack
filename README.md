# Job Listings Web Application – Full Stack Project

> **Tech Stack:** React.js · Flask · MySQL · SQLAlchemy · Bootstrap

---

## Overview

A full-stack job listings web application that allows users to create, view, and manage
job postings through an intuitive React.js frontend and a Flask-based REST API backend.
This project demonstrates how modern frontend and backend technologies can work together
seamlessly to build real-world applications.

---

## Features

- **Add Job Posts** – Create new job entries with title, company, location, and description.
- **View Jobs** – Display all jobs in a card/grid format with real-time updates.
- **Delete Jobs** – Remove outdated or incorrect job posts.
- **Search & Filter** – Filter jobs by company, role, or location.
- **RESTful API** – Backend endpoints to manage job data.
- **SQLAlchemy ORM** – Easy and efficient MySQL database interactions.

---

## Screenshots

### Job Post Form

![Job Post Form](Screenshots/1.%20Job%20Post%20Form.png)

### Job Listings Page

![Job Listings Page](Screenshots/2.%20Job%20Listings%20Page.png)

### Job Listings Without Filter

![Job Listings Without Filter](Screenshots/3.%20Jobs%20Without%20Filter.png)

### Job Listings With Country Filter

![Job Listings With Country Filter](Screenshots/4.%20Country%20Filter.png)

### Job Listings With Sector Filter

![Job Listings With Sector Filter](Screenshots/5.%20Sector%20Filter.png)

### Job Listings With Experience Filter

![Job Listings With Experience Filter](Screenshots/6.%20Experience%20Filter.png)

### Job Listings With Experience and Country Filter

![Job Listings With Experience and Country Filter](Screenshots/7.%20Experience%20and%20Country%20Filter.png)

## Tech Stack

| Category    | Technology                |
| ----------- | ------------------------- |
| Frontend    | React.js, Bootstrap       |
| Backend     | Python, Flask, Flask-CORS |
| Database    | MySQL, SQLAlchemy ORM     |
| API Tooling | Axios, Postman            |
| State Mgmt  | React Hooks               |

---

## Folder Structure

```
job-listings-app/
├── client/                  # React frontend
│   ├── public/
│   ├── src/
│       ├── components/
│       │   ├── Footer.css
│       │   ├── Footer.js
│       │   ├── JobForm.js
│       │   ├── JobList.css
│       │   ├── JobList.js
│       │   ├── Navbar.css
│       │   ├── Navbar.js
│       ├── api.js
│       ├── App.css
│       ├── App.js
│       ├── index.js
├── server/                  # Flask backend
│   ├── app.py
│   ├── database.py
│   ├── models.py
│   └── routes.py
│   └── requirements.txt
└── README.md
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/hasnain1665/joblistings-fullstack.git
cd joblistings-fullstack
```

### 2. Setup Backend

```bash
cd server
python -m venv venv
venv\Scripts\activate   # For Windows
pip install -r requirements.txt
python app.py
```

### 3. Setup Frontend

```bash
cd ../client
npm install
npm start
```

---

## API Endpoints

| Method | Endpoint                      | Description                                |
| ------ | ----------------------------- | ------------------------------------------ |
| GET    | `/jobs?page=&per_page=&query` | Get paginated and optionally filtered jobs |
| POST   | `/jobs`                       | Add a new job                              |
| DELETE | `/jobs/:id`                   | Delete job by ID                           |

---

## Environment Variables

In `server/app.py`, configure your database URI and secret keys:

```python
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://username:password@localhost/dbname'
```

---
