# Alp Kurt – Portfolio Landing Page

This frontend project is built with **Vite** and **React**, and is deployed via **Firebase Hosting** using **GitHub Actions** for CI/CD. It includes custom interactions, floating Pac-Man-style ghosts, and Firebase Analytics integration to track portfolio engagement.

***

## Tech Stack

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting) — Static site hosting
- [Firebase Analytics](https://firebase.google.com/docs/analytics) — Tracks custom events
- [GitHub Actions](https://github.com/features/actions) — CI/CD pipeline for deployment

---

## Changelog

See [Changelog](frontend/changelog.md) for version history and updates.

---

## Live Site

[alpkurt.com](https://alpkurt.com)

---

## Local Development
#### Navigate into the frontend directory
    cd frontend

#### Install dependencies
    npm install

#### Start development server
    npm run dev

---

## Environment Setup
Add a .env file in the root of the project:

    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id

---

## License

This project is open source and available under the [MIT License](/LICENSE).

---

## Developer

This project was designed and developed by Alp Kurt — a Game and Web Developer.
krtalp@gmail.com