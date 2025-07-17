# Sharrouf Bros - Premium Italian Woodworking Machinery

## Project Overview

Sharrouf Bros is an authorized SCM dealer for premium Italian woodworking machinery in the Middle East. This website provides information about our services, products, and contact details.

## Technologies Used

This project is built with:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn-ui** - Modern component library
- **Tailwind CSS** - Utility-first CSS framework
- **Supabase** - Backend as a service

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <YOUR_REPOSITORY_URL>
cd sharrouf-bros
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test:performance` - Run performance tests
- `npm run analyze` - Analyze bundle size

## Development

### Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── lib/           # Utility functions and configurations
├── hooks/         # Custom React hooks
└── types/         # TypeScript type definitions
```

### Code Style

This project uses:
- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety

## Deployment

This project is configured with GitHub Actions for automatic deployment to cPanel via FTP. The deployment workflow triggers on pushes to the main branch.

### Environment Variables

Make sure to set up the following environment variables in your deployment environment:
- `FTP_SERVER` - Your cPanel FTP server address
- `FTP_USERNAME` - Your FTP username  
- `FTP_PASSWORD` - Your FTP password

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to Sharrouf Bros.
