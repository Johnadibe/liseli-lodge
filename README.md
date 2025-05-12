# Liseli Lodge - Luxury Accommodation in Mongu, Zambia

![Liseli Lodge](https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)

## Overview

Liseli Lodge is a beautiful, responsive website for a luxury accommodation in Mongu, Zambia. The website showcases the lodge's amenities, rooms, conference facilities, and more, providing visitors with a comprehensive view of what to expect during their stay.

Liseli Lodge is a place for you to relax and enjoy your stay in Mongu in a comfortable, modern setting. Located in a peaceful suburb of Mongu, it offers an oasis of calm and tranquility, equipped with all the facilities you would need to have a relaxing, stress-free stay in the true heart of Zambia.

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Modern UI**: Clean, professional design with beautiful animations
- **Multiple Pages**: Home, About, Accommodation, Conferences, News, and Contact pages
- **Interactive Elements**: Animated components using Framer Motion
- **Dark Mode Support**: Built-in light and dark theme support
- **Accessibility**: Designed with accessibility in mind
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility

## Technologies Used

- **Next.js 14.2.25**: React framework for server-rendered applications
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: High-quality UI components built with Radix UI and Tailwind CSS
- **Framer Motion**: Animation library for React
- **React Hook Form**: For form handling and validation
- **Zod**: TypeScript-first schema validation
- **Lucide Icons**: Beautiful, consistent icon set

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/liseli-lodge.git
   cd liseli-lodge
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install

   # or

   yarn

   # or

   pnpm install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev

   # or

   yarn dev

   # or

   pnpm dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

\`\`\`
liseli-lodge/
├── frontend/ # Frontend code
│ ├── app/ # Next.js app directory
│ │ ├── about/ # About page
│ │ ├── accommodation/ # Accommodation page
│ │ ├── conferences/ # Conferences page
│ │ ├── contact/ # Contact page
│ │ ├── news/ # News page
│ │ ├── layout.tsx # Root layout
│ │ └── page.tsx # Home page
│ ├── components/ # React components
│ ├── lib/ # Utility functions
│ └── styles/ # Global styles
├── public/ # Static assets
├── .gitignore
├── next.config.js
├── package.json
├── README.md
├── tailwind.config.ts
└── tsconfig.json
\`\`\`

## Customization

### Changing Colors

The color scheme can be customized in `frontend/styles/globals.css` by modifying the CSS variables in the `:root` selector.

### Adding New Pages

1. Create a new directory in the `frontend/app` directory
2. Add a `page.tsx` file in the new directory
3. Create any necessary components in the `frontend/components` directory

### Modifying Content

Most of the content can be modified by editing the respective component files in the `frontend/components` directory.

## Deployment

This project can be easily deployed to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fliseli-lodge)

For other deployment options, please refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Images from [Unsplash](https://unsplash.com/)
- Icons from [Lucide Icons](https://lucide.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
