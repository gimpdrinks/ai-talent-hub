# AI TalentHub

A premium marketplace connecting global clients with highly skilled Filipino AI professionals. AI TalentHub showcases the technical excellence, strong English proficiency, and competitive rates of Filipino AI talent while providing a seamless platform for project collaboration.

## 🎯 Mission

To bridge the gap between global demand for AI expertise and the exceptional talent pool of Filipino AI professionals, creating meaningful opportunities while delivering outstanding value to clients worldwide.

## ✨ Key Features

### For Clients
- **Curated Talent Directory**: Browse 800+ verified Filipino AI specialists
- **Advanced Search & Filtering**: Find talent by skills, location, experience level, and rates
- **Skill Verification System**: All freelancers undergo rigorous AI assessments
- **Direct Contact Access**: Premium plans provide direct freelancer communication
- **Project Management**: Post projects and receive proposals from qualified experts
- **Transparent Pricing**: Clear subscription-based pricing with no hidden fees

### For Filipino AI Professionals
- **Profile Showcase**: Create detailed profiles highlighting skills and experience
- **AI Skill Verification**: Take assessments to earn verified badges (Expert, Professional, Intermediate)
- **Featured Listings**: Premium placement for increased visibility
- **Global Opportunities**: Access to international clients and projects
- **Portfolio Integration**: Showcase work and build professional reputation
- **Analytics Dashboard**: Track profile views and engagement metrics

### Platform Features
- **Role-Based Dashboards**: Customized experiences for clients and freelancers
- **Responsive Design**: Optimized for desktop and mobile devices
- **Authentication System**: Secure user registration and login via Supabase
- **Real-time Updates**: Live notifications and status updates
- **Premium Subscriptions**: Tiered plans with enhanced features

## 🛠 Technologies Used

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Icons**: Lucide React icon library
- **Build Tool**: Vite for fast development and builds
- **Backend**: Supabase for authentication and database
- **Routing**: React Router DOM for navigation
- **State Management**: React Context API
- **Deployment**: Netlify for hosting

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Supabase account for backend services

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-talent-hub.git
   cd ai-talent-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory with the following variables:
   ```env
   VITE_SUPABASE_URL=your_supabase_url_here
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key_here
   VITE_OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the application.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── FreelancerCard.tsx
│   ├── FreelancerDashboard.tsx
│   └── ClientDashboard.tsx
├── contexts/           # React Context providers
│   └── AuthContext.tsx
├── pages/              # Page components
│   ├── LandingPage.tsx
│   ├── Directory.tsx
│   ├── Dashboard.tsx
│   ├── Login.tsx
│   ├── Signup.tsx
│   ├── Verify.tsx
│   └── [other pages]
├── lib/                # Utility libraries
│   └── supabase.ts
└── App.tsx            # Main application component
```

## 🗄 Database Schema

The application uses Supabase with the following main table:

### Profiles Table
- `id` (uuid, primary key)
- `tokens_available` (integer, default: 0)
- `created_at` (timestamp with timezone)

Additional tables for freelancer profiles, assessments, and project data are managed through the application interface.

## 🎨 Design Philosophy

- **Filipino-Focused**: Celebrates and highlights Filipino talent and cultural strengths
- **Professional**: Clean, modern interface suitable for business use
- **Accessible**: Responsive design with clear navigation and typography
- **Performance**: Optimized loading times and smooth interactions
- **Trust**: Verification badges and transparent rating systems

## 🔐 Authentication & Security

- Secure authentication via Supabase Auth
- Row Level Security (RLS) enabled on all tables
- Protected routes for authenticated users
- Role-based access control (Client vs Freelancer)
- Secure API key management

## 📊 Features by User Role

### Clients
- Browse and search verified Filipino AI talent
- View detailed freelancer profiles and portfolios
- Access contact information with premium subscription
- Post projects and receive proposals
- Track project progress and communications

### Freelancers (Filipino AI Professionals)
- Create comprehensive professional profiles
- Take AI skill verification assessments
- Showcase portfolios and work samples
- Apply for projects and respond to client inquiries
- Upgrade to featured listings for increased visibility

### Admin
- Review and approve skill verification submissions
- Manage user accounts and platform content
- Monitor platform analytics and performance
- Handle support requests and disputes

## 🌐 Deployment

The application is configured for deployment on Netlify:

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set environment variables in Netlify dashboard
   - Configure build command: `npm run build`
   - Set publish directory: `dist`

## 🤝 Contributing

We welcome contributions from the community! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎯 Roadmap

- [ ] Enhanced project management tools
- [ ] Real-time messaging system
- [ ] Mobile application
- [ ] Advanced analytics dashboard
- [ ] API for third-party integrations
- [ ] Multi-language support
- [ ] Payment processing integration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Support

For support, email support@aitalenthub.com or join our community discussions.

---

**AI TalentHub** - Empowering Filipino AI Excellence Globally 🇵🇭