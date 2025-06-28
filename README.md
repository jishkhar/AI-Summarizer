# AI Summarizer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.x-purple.svg)](https://vitejs.dev/)

A powerful AI-powered text summarization web application that harnesses advanced natural language processing to generate concise, accurate summaries from lengthy articles and documents.

![AI Summarizer Demo](./demo/screenshot.png)

## 🚀 Features

- **Smart URL Summarization**: Paste any article URL and get instant AI-generated summaries
- **Multiple Summary Lengths**: Choose between short, medium, or detailed summaries
- **History Management**: Keep track of your previously summarized articles
- **Copy to Clipboard**: Easily copy summaries for sharing or saving
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Real-time Processing**: Fast API responses with loading indicators
- **Clean UI**: Modern, intuitive interface built with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **API Integration**: RapidAPI Article Extractor & Summarizer
- **Icons**: Heroicons/Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm/yarn

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v16.0 or higher)
- npm or yarn
- A RapidAPI account and API key

## ⚡ Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/jishkhar/AI-Summarizer.git
cd AI-Summarizer
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env` file in the root directory and add your API key:

```env
VITE_RAPIDAPI_ARTICLE_KEY=your_rapidapi_key_here
```

To get your API key:
1. Sign up at [RapidAPI](https://rapidapi.com/)
2. Subscribe to the Article Extractor and Summarizer API
3. Copy your API key from the dashboard

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## 📁 Project Structure

```
AI-Summarizer/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Demo.jsx
│   │   ├── Hero.jsx
│   │   └── index.js
│   ├── services/
│   │   ├── article.js
│   │   └── store.js
│   ├── assets/
│   │   └── images/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎯 How to Use

1. **Enter Article URL**: Paste the URL of any article you want to summarize
2. **Click Summarize**: Hit the summarize button to process the article
3. **Read Summary**: View the AI-generated summary in clean, readable format
4. **Copy or Save**: Use the copy button to save the summary to clipboard
5. **Browse History**: Access your previously summarized articles from the history section

## 🔗 API Integration

This project uses the Article Extractor and Summarizer API from RapidAPI. The API provides:

- Article content extraction from URLs
- AI-powered text summarization
- Multiple summary length options
- Fast response times
- Reliable uptime

## 🎨 Customization

### Styling
The project uses Tailwind CSS for styling. You can customize the appearance by:
- Modifying `tailwind.config.js`
- Updating component styles in respective JSX files
- Adding custom CSS in `App.css` or `index.css`

### API Configuration
To use a different summarization API:
1. Update the API endpoints in `src/services/article.js`
2. Modify the request/response handling logic
3. Update environment variables accordingly

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy with automatic builds

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure environment variables
4. Set up continuous deployment

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenAI](https://openai.com/) for inspiration in AI text processing
- [RapidAPI](https://rapidapi.com/) for providing the summarization API
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React](https://reactjs.org/) team for the amazing framework
- [Vite](https://vitejs.dev/) for the lightning-fast build tool

## 📞 Support

If you have any questions or run into issues, please:
- Open an issue on GitHub
- Check existing issues for solutions
- Contact: [your-email@example.com]

## 🔮 Future Enhancements

- [ ] Support for PDF document summarization
- [ ] Multiple language support
- [ ] User authentication and personal dashboards
- [ ] Summary comparison features
- [ ] Export summaries to various formats (PDF, Word, etc.)
- [ ] Dark/Light theme toggle
- [ ] Advanced summary customization options

---

⭐ If you found this project helpful, please consider giving it a star on GitHub!

**Built with ❤️ by [jishkhar](https://github.com/jishkhar)**
