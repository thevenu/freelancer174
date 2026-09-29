# Venu Jerripothu — AI-Assisted Social Media Content Creator Portfolio

A modern, high-converting, fully responsive portfolio website created for **Venu Jerripothu**, an AI-assisted social media content creator based in Hyderabad, India.

---

## 🎨 Color Palette & Design System

The design is built around an organic, high-end agency palette:

| Element | Color Name | Hex Code | Description |
| :--- | :--- | :--- | :--- |
| **Primary** | Forest Green | `#24392D` | Deep, sophisticated green for headlines, navigation, and accents |
| **Secondary** | Sage Green | `#C5E5B9` | Fresh, modern botanical green for pill tags, highlights, and CTAs |
| **Background** | Warm Beige | `#F6F2E9` | Soft, warm paper-like canvas ensuring high readability |
| **Cards & Modals** | Beige Card | `#FAF7F2` | Gentle surface tint providing depth and separation |
| **Text** | Dark Charcoal | `#26332A` | High-contrast earthy charcoal for crisp typography |

* **Typography**: Plus Jakarta Sans (Clean, modern geometry) & Space Grotesk (Distinctive editorial headings).
* **Styling**: Tailwind CSS with custom responsive utilities, soft rounded corners (`rounded-3xl`), and subtle micro-interactions.

---

## 🚀 Instant Quick Start (Zero Setup Needed)

You can launch the portfolio immediately in any web browser without running commands or installing dependencies:

1. Locate the file:
   `c:\Users\jerri\Downloads\venu-jerripothu-portfolio\index.html`
2. **Double-click** `index.html` or open it with Google Chrome, Microsoft Edge, Brave, or Safari.
3. Everything is fully functional out of the box:
   * **Copy to Clipboard**: Instant toasts for all 10 captions and 5 Reels scripts.
   * **Project Suite Modals**: Interactive breakdowns of Brew & Bloom Café, Urban Thread Boutique, and Skyline Homes.
   * **Pricing Connector**: Clicking "Choose Package" automatically fills the contact form and scrolls down smoothly.
   * **Contact Form**: Generates ready-to-send formatted email drafts via mailto fallback.

---

## 💻 Developer / Vite Setup (Optional)

If you wish to run or build using the standard React/Vite development server:

```bash
# Navigate to the project directory
cd venu-jerripothu-portfolio

# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```

---

## 📂 Project Architecture

```
venu-jerripothu-portfolio/
│
├── index.html                  # Standalone instant-run version with React & Tailwind
├── package.json                # Project dependencies & npm scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Custom theme with Forest, Sage, Beige, Charcoal palette
├── postcss.config.js           # PostCSS configuration
│
└── src/
    ├── main.jsx                # Application root entry point
    ├── App.jsx                 # Top-level application layout and global state
    ├── index.css               # Base Tailwind directives and custom scrollbar
    │
    ├── data/
    │   └── portfolioData.js    # Data source: bio, projects, 10 captions, 5 reels, pricing
    │
    └── components/
        ├── Navbar.jsx          # Sticky header with responsive navigation & mobile menu
        ├── Hero.jsx            # Hero section with headline, tags, and workspace visual
        ├── About.jsx           # Bio section & 6 core creator skills
        ├── Portfolio.jsx       # 3 Fictional Sample Projects (Café, Fashion, Real Estate)
        ├── Captions.jsx        # 10 copy-ready social media captions with filter tabs
        ├── Reels.jsx           # 5 short-form video scripts with hooks and breakdowns
        ├── Services.jsx        # 4 core service capability cards
        ├── Pricing.jsx         # 3 monthly packages (Starter, Growth, Premium)
        ├── Contact.jsx         # Inquiry form with mailto fallback & contact details
        ├── Footer.jsx          # Social links, branding, and copyright notice
        ├── Modal.jsx           # Accessible dialog for full project and script views
        └── Toast.jsx           # Floating notification toast for clipboard actions
```

---

## 📋 Included Sections & Deliverables

1. **Navigation Bar**: Sticky navigation with smooth scrolling to all sections and an eye-catching "Hire Me" button.
2. **Hero Section**:
   * Headline: *"Creative Social Media Content That Helps Your Brand Stand Out."*
   * Subheadline: *"I help businesses create engaging social media posts, captions, Reels scripts, and content strategies using AI-assisted creativity."*
   * Creator Details: Venu Jerripothu | AI-Assisted Social Media Content Creator | Hyderabad, India.
3. **About Me**:
   * Highlights 6 key skills: AI Content Creation, Social Media Copywriting, Instagram Reels Scripts, Content Planning, Canva Graphic Design, and Telugu-English Content Localization.
4. **Portfolio (3 Sample Projects)**:
   * Clearly labeled as **Fictional Sample Projects**.
   * **Project 1: Brew & Bloom Café** (F&B / Warm café aesthetics).
   * **Project 2: Urban Thread Boutique** (Fashion & Retail / Minimal chic).
   * **Project 3: Skyline Homes** (Real Estate / Luxury architecture).
   * Detailed modal viewers for full post copies and video strategies.
5. **Captions Gallery**:
   * 10 realistic social media captions with hashtags across Food, Fashion, Real Estate, and Wellness.
   * Filterable category tabs + working "Copy Caption" buttons with interactive toasts.
6. **Instagram Reels Scripts**:
   * 5 full short-form video scripts featuring:
     1. *A Perfect Coffee Break* (Brew & Bloom Café)
     2. *Three Ways to Style One Outfit* (Urban Thread Boutique)
     3. *Find Your Dream Home* (Skyline Homes)
     4. *Behind the Scenes of a Café* (Brew & Bloom Café)
     5. *New Collection Reveal* (Urban Thread Boutique)
   * Includes video duration, retention hooks, shot-by-shot visual directions, voiceover/on-screen cues, and CTAs.
7. **Services**:
   * Social Media Content, Reels Scripts, Monthly Content Calendars, and Canva Post Designs.
8. **Pricing Plans**:
   * Starter (₹2,500/mo), Growth (₹5,000/mo - Featured), and Premium (₹10,000/mo).
   * "Choose Package" buttons automatically link to and update the contact form.
9. **Contact & Inquiry**:
   * Form capturing Name, Email, Business Name, Service, Budget/Plan, and Message.
   * Generates a pre-filled email draft upon submission with a clear explanation regarding backend integration (e.g. EmailJS/Formspree).
   * Details configured: Email (`venujerripothu07@gmail.com`), Instagram (`@thevenu._` / `https://instagram.com/thevenu._`), and location (Hyderabad, India).
10. **Footer**:
    * Clean branding, quick navigation links, social placeholders, and copyright notice.
11. **🤖 Interactive AI Chatbot Assistant**:
    * Floating interactive assistant widget in the bottom-right corner.
    * Answers visitor questions about Venu's background, services, Telugu-English localization, and pricing.
    * Allows 1-click package selection ("Select Growth Plan") that automatically updates the contact form and scrolls to it.
    * **Dynamic Reel Hook Generator**: Visitors can ask for ideas for their industry (e.g. gym, café, dental clinic, fashion) and the AI generates viral hooks on the spot!
    * Direct contact handoff to `venujerripothu07@gmail.com` and `@thevenu._`.
    * Smooth in-page navigation: automatically scrolls the visitor to relevant sections when clicked.

---

## 🌐 Deploying to the Web

You can deploy this website for free in under 2 minutes:

### Option A: Netlify Drop (Fastest)
1. Visit [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `venu-jerripothu-portfolio` folder.
3. Your site is live with a free custom SSL URL!

### Option B: Vercel
1. Push the code to a GitHub repository.
2. Import the repository in [vercel.com](https://vercel.com).
3. Vercel will automatically recognize the Vite setup and deploy.
