# Todo App

A sleek, responsive Todo application built with React and Vite. It helps users manage their daily tasks with status filtering, task counters, and persistent data storage.

## 🚀 Live Demo
- **Live Deployment**: <!-- Add your live deployment link here (e.g. Vercel, Netlify) -->

---

## 💡 What I Learnt

Building this Todo application provided great practical experience with core React principles and web browser storage:

- **State Management & Props Drilling**: Managing central state at the top level in `App.jsx` and passing state and action handlers down to child components (`Header`, `Tabs`, `TodoList`, `TodoCard`, `TodoInput`).
- **Data Persistence with localStorage**: Using `localStorage.setItem()` and `localStorage.getItem()` alongside JSON serialization to retain user tasks across browser sessions and page refreshes.
- **Side Effects with useEffect**: Implementing the `useEffect` hook with an empty dependency array to safely read and initialize stored tasks once when the component mounts.
- **Array Transformations & CRUD Operations**:
  - **Create**: Appending new task items with the spread operator (`[...todos, newTodo]`).
  - **Update**: Marking specific todos complete immutably.
  - **Delete**: Filtering tasks cleanly using array methods (`filter()`).
- **Dynamic Filtering & Computed State**: Deriving open, completed, and total task counts dynamically without needing redundant state variables.
- **Component Decomposition**: Breaking UI into focused, modular components with clear separation of responsibilities.

---

## 🛠️ Tech Stack
- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Icons**: Font Awesome

---

## 💻 Getting Started Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ArchitDash12/todo-app.git
   cd todo-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```
