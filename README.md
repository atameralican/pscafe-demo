<a id="readme-top"></a>

# PlayStation Cafe Demo Website

A modern, mobile-optimized, and fully functional web application designed for a PlayStation Cafe. Users can browse the game list, explore popular games, view location details, customer reviews, and more.

---

## 🎮 Features

- Browse all available games
- View popular games in a carousel
- Mobile-first responsive design
- Smooth animations and transitions
- Contact page
- Location and cafe information
- Customer testimonials
- Fully optimized performance with Next.js App Router

---

## 🛠️ Tech Stack

- **Frontend Framework:** Next.js 
- **React** 
- **Language:** TypeScript 
- **Styling:** Tailwind CSS 
- **Animations:** Framer Motion 
- **UI Components:** Radix UI, Tabler Icons, Lucide Icons  
- **Database:** Supabase (PostgreSQL)  

---

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js 18.0 or higher
- A Supabase account

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/pscafe-demo.git
cd pscafe-demo
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a .env file in the root directory of the project.

Add the following environment variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

**Supabase Setup:**

> ⚠️ **Important:** This application only performs **read (GET)** operations. The games_list table and its data must already exist in your database.

1. Create an account at [Supabase](https://supabase.com).
2. Create a new project
3. Ensure that your database contains a `games_list` table with game data
4. Go to **Settings > API** and copy 
   - **Project URL** -> `NEXT_PUBLIC_SUPABASE_URL`
   - **Service Role Key** -> `SUPABASE_SERVICE_ROLE_KEY`

### 4. Start the Development Server

```bash
npm run dev
# veya
yarn dev
```

Open your browser and visit: `http://localhost:3000` 



## 📁 Project Structure



```
pscafe-demo/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes
│   │   ├── gameList/             # Fetch all games
│   │   └── popularGames/         # Fetch popular games
│   ├── contact/                  # Contact page
│   ├── game-list/                # Game list page
│   ├── layout.tsx                # Main layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
│
├── components/                   # React components
│   ├── Footer/                   # Footer component
│   ├── Navbar/                   # Navigation bar
│   ├── PopularGames/             # Popular games carousel
│   └── ui/                       # Custom UI components
│       ├── animated-testimonials.tsx
│       ├── apple-cards-carousel.tsx
│       ├── bento-grid.tsx
│       ├── card.tsx
│       └── ... (other UI components)
│
├── lib/                          # Utility functions
│   ├── supabase-admin.ts         # Supabase client
│   └── utils.ts                  # Helper utilities
│
├── constants/                    # Static data
│   └── homePage.ts               # Home page constants
│
├── public/                       # Static assets
│
├── package.json                  # Project dependencies
├── tsconfig.json                 # TypeScript configuration
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
└── components.json               # UI components metadata
```

## Contact

Alican ATAMER - [@linkedin](https://www.linkedin.com/in/alican-atamer/) 

Project Link: [https://github.com/atameralican/pscafe-demo](https://github.com/atameralican/pscafe-demo)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



