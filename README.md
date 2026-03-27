# Hult Prize UET Taxila https://www.hultprizeuett.app/

A high-impact, mobile-responsive informational website for the "Hult Prize at UET Taxila" campus event. This project is built with React and Tailwind CSS, focusing on performance, aesthetics, and ease of deployment.

![Theme: Unlimited 2026](https://img.shields.io/badge/Theme-Unlimited%202026-E6007F)
![React](https://img.shields.io/badge/React-18.2-61DAFB)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000)

## 🎨 Visual Identity

- **Theme**: "Unlimited 2026" - Focus on bold possibilities and UN SDGs
- **Aesthetic**: Dark mode base, high-contrast, minimalist, professional
- **Colors**: 
  - Background: Deep Black (#000000)
  - Text: White (#FFFFFF)
  - Accents: Hult Prize Magenta (#E6007F)
- **Typography**: Poppins (Bold Sans-Serif)

## � Getting Started

### Prerequisites

- Node.js 18+ and npm (only for local development)

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/msaad732/hult-prize-uet-taxila.git
    cd hult-prize-uet-taxila
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run development server**:
    ```bash
    npm run dev
    ```

4.  **Open in browser**:
    ```
    http://localhost:5173
    ```

## 📋 Features

### Pages
- **Home**: High-impact hero section with stats and CTAs.
- **About**: Challenge description & interactive UN SDGs grid.
- **Guidelines**: Competition rules and eligibility criteria.
- **Timeline**: Visual schedule of events (Deadlines updated to Feb 8, 2026).
- **Contact**: Campus Director contact info and FAQs.
- **Register**: Redirects participants to the official Hult Prize Global website.

### Technical Highlights
- **Static Architecture**: No backend required, making it secure and fast.
- **Responsive Design**: Optimized for mobile, tablet, and desktop.
- **Vite**: Ultra-fast build tool.

## �️ Editing Content

You can easily update the content without deep coding knowledge:

| To Change... | Edit File... |
| :--- | :--- |
| **Dates & Deadlines** | `src/pages/Timeline.jsx` |
| **Contact Info / FAQs** | `src/pages/Contact.jsx` |
| **Registration Link** | `src/pages/Register.jsx` (Look for `href="#"`) |
| **Menu Items** | `src/components/Navbar.jsx` |

## 🌍 Deployment

This site is optimized for **Vercel** or **Netlify**.

1.  Login to [Vercel](https://vercel.com).
2.  Click **"Add New Project"**.
3.  Import from your GitHub repository.
4.  Click **Deploy**.

Any changes pushed to the `main` branch on GitHub will automatically update the live site.

## 📞 Contact

**Campus Director**: Eman Khaliq  
**Location**: UET Taxila, Punjab, Pakistan

---

Built for Hult Prize @ UET Taxila | Unlimited 2026
