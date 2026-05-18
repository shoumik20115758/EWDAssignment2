# Assignment 2 Movies App

## Overview

This project is a React and TypeScript single page application developed as part of Enterprise Web Development Assignment 2.

The application extends the movie application developed during the labs and integrates with The Movie Database (TMDB) API to provide dynamic movie and actor information.

The project was developed using React, TypeScript, Material UI and Vite.

---

# Features Implemented

## Movie Views

The application includes multiple dynamic movie list views:

- Discover Movies
- Popular Movies
- Top Rated Movies
- Now Playing Movies

Each view retrieves live data from TMDB.

---

## Movie Details

Users can open a detailed movie page from any movie card.

The detail page includes:

- Overview
- Genres
- Production countries
- Runtime
- Revenue
- Rating
- Release date
- Movie posters/images
- Cast members

---

## Actor Features

Actors were added as an additional data entity.

The application includes:

- Popular actors page
- Actor cards
- Actor detail page
- Actor biography
- Actor birthday
- Actor place of birth
- Actor profile images

---

## Data Hyperlinking

The application includes data hyperlinking between entities.

Implemented links include:

- Movie card → Movie details
- Cast member → Actor details

This allows navigation between related data entities inside the application.

---

## Filtering and Sorting

Movie pages support:

### Filtering
- Live filtering by movie title

### Sorting
- Title A-Z
- Rating high to low
- Newest release date

---

## Pagination

Movie list pages include pagination controls:

- Previous page
- Next page
- Current page indicator

Pagination works across all movie categories.

---

## Fantasy Movie Feature

The application includes a Fantasy Movie page where users can create their own movie records.

The form supports:

- Title
- Overview
- Genres
- Release date
- Runtime
- Production companies

Fantasy movies are displayed immediately after creation.

---

## Login System

A simple local login system was implemented using browser localStorage.

Features include:

- Username login
- Session persistence after refresh
- Logout functionality

This was implemented to simulate basic user authentication behaviour without a backend service.

---

# Technologies Used

- React
- TypeScript
- Vite
- Material UI
- TMDB API

---

# API Usage

The application uses The Movie Database API for:

- Movie discovery
- Popular movies
- Top rated movies
- Now playing movies
- Movie details
- Movie images
- Movie credits
- Popular actors
- Actor details

---

# Application Structure

The project uses a component-based structure.

Main sections include:

- Components
- Pages
- API services
- Type definitions

State management was implemented using React hooks including:

- useState
- useEffect

---

# AI Usage

AI tools were used as development support tools during implementation.

AI assistance was primarily used for:

- debugging TypeScript issues
- troubleshooting React component behaviour
- discussing implementation approaches
- improving UI layout ideas
- identifying possible assignment features

All generated suggestions were reviewed, edited, tested and integrated manually.

The overall application structure, feature selection, API integration flow, state management logic, debugging process and final implementation decisions were reviewed and understood before inclusion in the project.

---

# Running the Application

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```txt
VITE_TMDB_KEY=your_tmdb_api_key_here
```

Start the development server:

```bash
npm run dev
```

---

# Known Limitations

- Fantasy movies are stored locally in React state and are not persisted in a database.
- Authentication uses localStorage only and is not connected to a backend service.
- React Router was not implemented; navigation is managed through React state.
- Actor pagination was not implemented.
