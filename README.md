# Business Card Generator

## Overview
The Business Card Generator is a web application that allows users to create and customize their own business cards. Users can input their personal information, select styles, and preview their cards before exporting them in various formats.

## Features
- User-friendly form for entering personal details.
- Live preview of the business card.
- Multiple card styles to choose from.
- Options to export the generated business card.
- Responsive design for optimal viewing on different devices.

## Project Structure
```
business-card-generator
├── public
│   ├── images
│   │   ├── logo.png
│   │   ├── default-avatar.png
│   │   └── favicon.ico
│   └── index.html
├── src
│   ├── assets
│   │   ├── fonts
│   │   │   └── fonts.css
│   │   └── icons
│   │       └── social-icons.svg
│   ├── components
│   │   ├── CardPreview
│   │   │   ├── CardPreview.js
│   │   │   └── CardPreview.css
│   │   ├── CardForm
│   │   │   ├── CardForm.js
│   │   │   └── CardForm.css
│   │   ├── StyleSelector
│   │   │   ├── StyleSelector.js
│   │   │   └── StyleSelector.css
│   │   └── ExportOptions
│   │       ├── ExportOptions.js
│   │       └── ExportOptions.css
│   ├── styles
│   │   ├── cardStyles.css
│   │   ├── variables.css
│   │   └── global.css
│   ├── utils
│   │   ├── exportHelpers.js
│   │   └── validation.js
│   ├── templates
│   │   ├── defaultTemplate.js
│   │   ├── modernTemplate.js
│   │   └── gradientTemplate.js
│   ├── App.js
│   └── index.js
├── netlify.toml
├── package.json
├── README.md
└── .gitignore
```

## Getting Started
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/business-card-generator.git
   ```
2. Navigate to the project directory:
   ```
   cd business-card-generator
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## Deployment
This project is configured to be deployed on Netlify. To deploy:
1. Push your code to a Git repository (GitHub, GitLab, etc.).
2. Connect your repository to Netlify.
3. Follow the prompts to deploy your site.

## License
This project is licensed under the MIT License. See the LICENSE file for details.