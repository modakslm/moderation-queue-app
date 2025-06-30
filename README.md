# Moderation Queue App

A responsive moderation interface built with React and Redux Toolkit, designed to help moderators review and manage user-submitted posts efficiently.

Live Demo: [https://moderation-queue-app.vercel.app](https://moderation-queue-app.vercel.app)

---

## Features

- List of reported posts with clear details (title, user, reason, time)
- Approve/Reject individual posts
- Batch operations with select all, approve selected, reject selected
- Status filter tabs (Pending, Approved, Rejected)
- Content preview modal with post details
- All actions persist using localStorage
- Responsive layout for desktop and tablet

---

## Tech Stack

- **Frontend**: React (with Vite)
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Data**: Mock data inside the app (no backend/API)

---

##  How to Run Locally

###  Prerequisites
- Node.js v20+
- npm

###  Setup Instructions

```bash
git clone https://github.com/modakslm/moderation-queue-app.git
cd moderation-queue-app
npm install
npm run dev
