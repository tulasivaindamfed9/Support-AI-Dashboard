# Support AI – Ticket Management System

Support AI is a modern **ticket management dashboard** built with **React, TypeScript, Redux Toolkit, and Tailwind CSS**.
It allows users to create support tickets, track their status, and visualize analytics through interactive charts.

The project demonstrates **frontend architecture, state management, role-based UI, and dashboard design** similar to real SaaS applications.

---

## 🚀 Live Demo

🔗 **Live Application:**
https://supportdashboard-five.vercel.app/

---

## 📌 Features

### Authentication & Roles

* Role-based interface
* Supported roles:

  * Admin
  * Agent
  * User

Each role sees different menu options in the sidebar.

---

### Dashboard

* Overview of ticket statistics
* Cards showing:

  * Total Tickets
  * Open Tickets
  * Resolved Tickets
* Ticket filtering by:

  * All
  * Open
  * Pending
  * Resolved

---

### Ticket Management

Users can:

* Create new support tickets
* View their created tickets
* Track ticket status
* Set ticket priority

Ticket properties include:

* Title
* Description
* Priority (Low / Medium / High)
* Status (Open / Pending / Resolved)

---

### Analytics Dashboard

The analytics page provides visual insights using charts:

**Pie Chart**

* Displays ticket distribution by status:

  * Open
  * Pending
  * Resolved

**Bar Chart**

* Displays ticket distribution by priority:

  * Low
  * Medium
  * High

Charts are implemented using **Recharts**.

---

### Notifications

When a new ticket is created:

* A notification is generated
* Notifications are stored in Redux state
* Unread notifications can be tracked

---

### UI Features

* Responsive dashboard layout
* Sidebar navigation
* Navbar with theme toggle
* Light mode / Dark mode support
* Toast notifications for user actions
* Clean card-based UI

---

## 🛠️ Tech Stack

Frontend

* React
* TypeScript
* Vite
* Redux Toolkit
* React Router DOM

UI / Styling

* Tailwind CSS
* Lucide Icons
* React Toastify

Charts

* Recharts

Deployment

* Vercel

---



## ⚙️ Installation & Setup

Clone the repository:

```
git clone https://github.com/yourusername/support-ai.git
```

Navigate into the project folder:

```
cd support-ai
```

Install dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## 🌙 Dark Mode

The application supports **light and dark themes**.

Theme switching works by toggling the `dark` class on the root HTML element and applying styles through Tailwind CSS.

---

## 📊 Example Screens

Main sections of the application:

* Dashboard overview
* Ticket creation form
* Ticket analytics charts
* User ticket list

---

## 🎯 Learning Goals of This Project

This project demonstrates:

* React project architecture
* TypeScript usage in real apps
* Redux state management
* Role-based UI logic
* Dashboard UI design
* Chart integration
* Dark mode implementation
* Frontend deployment

---

## 📦 Deployment

This project is deployed using **Vercel**.

To deploy:

1. Push the project to GitHub
2. Connect the repository in Vercel
3. Deploy automatically

---

## 👩‍💻 Author

Tulasi Vaindam

Frontend Developer

Tech Stack:
React • TypeScript • Redux • JavaScript • HTML • CSS • Tailwind

---

## ⭐ If you like this project

Please consider giving it a **star on GitHub**.

Connect with me on linkedin :  **https://www.linkedin.com/in/tulasi-vaindam/**
