# Task.1 Application

This project is a simple web application built using **React** and **Tailwind CSS**. It fetches posts from the **JSONPlaceholder** API and displays them in a user-friendly interface. The application consists of 6 pages, which are fully responsive and designed for smooth navigation.


## Project Overview

The web application fetches data from the **JSONPlaceholder API**, a free online REST API for testing and prototyping. The app includes functionalities such as post listings, viewing individual post details, and basic navigation across various sections of the website.

### API Used:

- **Posts** are fetched from: `https://jsonplaceholder.typicode.com/posts`

## Pages

The project includes the following pages:

1. **Home Page**: The main landing page introducing the application.
2. **Posts Page**: Displays a list of posts fetched from the JSONPlaceholder API.
3. **Post Details Page**: Shows detailed information about a selected post when clicked from the posts list.
4. **About Page**: Provides information about the purpose of the project.
5. **Contact Page**: A simple page where users can find out contact information.
6. **Not Found Page (404)**: Displays an error message when the user navigates to a non-existent page.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework used for styling.
- **Axios**: For fetching data from the API.
- **React Router**: Handles navigation between the different pages.
- **React Icons**: Provides the icons used in the interface.

# Installation Guide

## Prerequisites

- **Node.js:** Version `v20.10.0`  
  Ensure you have Node.js version `v20.10.0` installed to avoid compatibility issues. You can use [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) to manage and switch between different Node.js versions:

  ```bash
  nvm install 20.10.0
  nvm use 20.10.0

  ```

## Installation and Setup

**Note**: This repository was built from scratch and does not contain any cloned code from previous projects.


### Step 1: Clone the Repository

Clone the repository using the following command:
```bash
git clone https://github.com/yazannazaal/task-1.git
```
 **Step 2: Navigate to the project directory:**

   ```bash
   cd task-1
   ```
 **Step 3: Install dependencies:**

   ```bash
   npm install
   ```

 **Step 4: Run the development server:**

   ```bash
   npm run dev
   ```

