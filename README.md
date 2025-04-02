# Task Management App

## Description
A task management application that allows users to organize and track their tasks. The app includes features like user authentication, task CRUD operations, task categories, and LinkedIn profile scraping using Puppeteer.

## Tech Stack
- **Next.js** - Framework for building React applications.
- **Redux** - State management for handling the global state.
- **TypeScript** - A superset of JavaScript for type safety.
- **Nest.js** - A backend framework for building efficient and scalable server-side applications.
- **MongoDB** - NoSQL database for storing user and task data.
- **Puppeteer** - Node library for web scraping (used for LinkedIn profile scraping).
- **Tailwind CSS** - Utility-first CSS framework for styling.

## Features

### 1. User Authentication
- **Registration/Login**: Users can register an account and log in.
- **JWT Tokens**: Used for authentication and managing sessions.

### 2. Task Dashboard
- Users see a dashboard upon logging in that displays all their tasks.
- Each task includes:
  - Title
  - Description
  - Due Date

### 3. Task CRUD Operations
- **Create**: Users can add new tasks.
- **Read**: Users can view their tasks.
- **Update**: Users can edit existing tasks.
- **Delete**: Users can delete tasks.
- **Mark as Completed**: Users can mark tasks as completed.

### 4. Task Categories
- Users can categorize tasks into different categories such as "Work", "Personal", and "Shopping".
- Filter tasks based on categories.

### 5. Responsive Design
- The app is fully responsive, ensuring a seamless experience on both desktop and mobile devices.

### 6. LinkedIn Profile Scraping
- When registering, users can add a LinkedIn profile URL.
- Puppeteer (with Nest.js) scrapes the user’s LinkedIn profile (e.g., name, photo, URL).
- Display scraped LinkedIn profile information in the user's profile section.

## Installation

Follow these steps to set up the development environment:

### 1. Clone the Repository
```bash
git clone https://github.com/moshaosama/-Task-Management.git
cd task-management-app
