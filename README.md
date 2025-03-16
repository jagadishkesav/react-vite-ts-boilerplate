# React - Vite - TS - Boilerplate

🚀 A lightweight, scalable, and modern React boilerplate for quick project setup.

## ✨ Features
- ⚡ Fast and optimized setup with **Vite**
- 📦 Preconfigured **ESLint**, **Prettier**, and **TypeScript**
- 🔥 React 18 with modern hooks
- 🎨 CSS Modules & MUI support
- 🛠️ Ready-to-use folder structure

## Project Setup

### Prerequisites
- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/jagadishkesav/react-boilerplate.git
    cd react-boilerplate
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

### Running the Project
To start the development server:
```sh
npm run dev
# or
yarn dev
```

### Building the Project
To build the project for production:
```sh
npm run build
# or
yarn build
```

### Previewing the Build
To preview the production build:
```sh
npm run preview
# or
yarn preview
```

## Available Scripts

- `dev`: Starts the development server.
- `build`: Builds the project for production.
- `preview`: Previews the production build.
- `prepare`: Prepares Husky for Git hooks.
- `lint`: Runs ESLint to check for linting errors.
- `lint-fix`: Runs ESLint and fixes linting errors.
- `format`: Checks code formatting using Prettier.
- `format-fix`: Formats the code using Prettier.
- `knip`: Runs Knip to find unused exports.

## Folder Structure

```
├── public/                 # Static assets
├── src/                    # Source files
│   ├── api/                # API client
│   ├── components/         # Reusable components
│   ├── constants/          # Constants used throughout the app
│   ├── features/           # Feature-specific modules
│   ├── hooks/              # Custom hooks
│   ├── layout/             # Layout components
│   ├── pages/              # Page components
│   ├── styles/             # Styling and theme files
│   ├── types/              # TypeScript types
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Main App component
│   ├── env.ts              # Environment variables
│   ├── main.tsx            # Entry point for React
│   ├── routes.tsx          # Application routes
│   └── vite-env.d.ts       # Vite environment types
├── .husky/                 # Husky configuration for Git hooks
│   ├── _/                  # Husky internal scripts
│   ├── pre-commit          # Pre-commit hook script
│   └── post-merge          # Post-merge hook script
├── scripts/                # Custom scripts
│   ├── lint.sh             # Linting script
│   └── format.sh           # Formatting script
├── .eslintrc.js            # ESLint configuration
├── .prettierrc             # Prettier configuration
├── .prettierignore         # Files and folders to ignore by Prettier
├── .gitignore              # Files and folders to ignore by Git
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── package.json            # Project metadata and scripts
└── README.md               # Project documentation
```

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

## License

This project is licensed under the MIT License.
