# FitLog — Workout Library

FitLog is a dark, responsive workout library built with Next.js. It allows users to browse workouts, view detailed exercise information, create a daily workout plan, save workouts for later, and mark completed workouts.

## Live Project

Added deployed project URL here:

https://fit-log-next-js-project-az1flalag-russeldoc.vercel.app/


## GitHub Repository

Added GitHub repository URL here:

https://github.com/russeldoc/FitLog-Next-Js-Project

---

## Project Description

FitLog is designed as a simple and focused workout companion.

Users can:

- Browse a library of workouts
- Sort workouts by duration, calories, or rating
- View detailed workout information
- Add workouts to today's plan
- Save workouts for later
- Remove workouts from their plan or saved list
- Mark workouts as completed
- View workout statistics
- Keep plan and saved data after refreshing the browser

The interface uses a dark fitness-focused design with a lime accent color and responsive layouts for desktop and mobile devices.

---

## Technologies Used

- Next.js
- React
- JavaScript
- Tailwind CSS
- Lucide React
- Next.js App Router
- REST API
- Browser LocalStorage

---

## Features

### 1. Workout Library

The home page displays workouts fetched from the FitLog API.

Each workout card includes:

- Workout image
- Muscle groups
- Workout name
- Equipment
- Duration
- Calories
- Rating

---

### 2. Workout Sorting

The workout library can be sorted by:

- Duration
- Calories
- Rating

The default sorting option is Duration.

---

### 3. Workout Details

Each workout has a dedicated detail page containing:

- Large workout image
- Description
- Muscle groups
- Equipment
- Difficulty
- Sets
- Reps
- Duration
- Calories
- Rating
- Step-by-step instructions

---

### 4. Today's Plan

Users can add workouts to their daily plan.

The plan supports a maximum of five workouts.

The My Plan page displays:

- Number of exercises
- Total minutes
- Total calories
- Workout cards
- View Details
- Mark as Done
- Remove workout

---

### 5. Save for Later

Users can save workouts for later.

Saved workouts can be viewed from the Saved tab on the My Plan page.

---

### 6. Workout Completion

Users can mark a planned workout as completed.

Completed workouts are visually displayed as completed and remain saved after refreshing the browser.

---

### 7. LocalStorage Persistence

FitLog stores user selections in browser LocalStorage.

The following data is persisted:

- Today's plan
- Saved workouts
- Completed workouts

---

### 8. Toast Notifications

User actions provide feedback through toast notifications.

Examples:

- Added to today's plan
- Already in today's plan
- Saved for later
- Removed from today's plan
- Removed from saved
- Workout marked as done
- Today's plan is full

---

### 9. Responsive Design

The application is designed for:

- Mobile
- Tablet
- Desktop

The navigation, hero section, workout cards, workout details, and My Plan page adapt to different screen sizes.

---

### 10. Loading & Error States

The application includes:

- Workout library loading UI
- Workout detail loading skeleton
- Custom 404 page
- Invalid workout handling

---

## API

FitLog uses the following API:

```text
https://api.abcz.workers.dev/api/fitlog