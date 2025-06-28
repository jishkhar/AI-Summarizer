# AI Summary for Articles - Chrome Extension

[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285f4.svg)](https://developer.chrome.com/docs/extensions/)
[![Manifest V3](https://img.shields.io/badge/Manifest-V3-green.svg)](https://developer.chrome.com/docs/extensions/mv3/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A powerful Chrome extension that generates AI-powered summaries of web articles using Google's Gemini API. Simply browse to any article and get instant, intelligent summaries with customizable detail levels.

![AI Summary Extension Demo](./demo/screenshot.png)

## 🚀 Features

- **One-click Article Summarization**: Automatically extracts and summarizes content from any web page
- **Multiple Summary Types**: Choose between brief, detailed, or bullet-point summaries
- **Smart Content Detection**: Intelligently identifies article content using multiple selectors
- **Gemini AI Integration**: Powered by Google's advanced Gemini 1.5 Flash model
- **Secure API Key Storage**: Your API key is stored locally and never shared
- **Copy to Clipboard**: Easily copy summaries for sharing or saving
- **Clean, Modern UI**: Intuitive popup interface with loading states
- **Universal Compatibility**: Works on all websites with readable content

## 🛠️ Technology Stack

- **Extension Framework**: Chrome Manifest V3
- **AI Model**: Google Gemini 1.5 Flash API
- **Storage**: Chrome Storage API (sync)
- **Content Detection**: Advanced DOM parsing
- **UI**: Vanilla HTML/CSS/JavaScript
- **Permissions**: Active tab, storage, scripting, all URLs

## 📋 Prerequisites

- Google Chrome browser (latest version recommended)
- Google account for Gemini API access
- Active internet connection

## ⚡ Installation & Setup

### 1. Download the Extension

```bash
git clone https://github.com/jishkhar/AI-Summarizer.git
cd AI-Summarizer
```

### 2. Get Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the generated API key (starts with `AIza...`)

### 3. Install the Extension

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **"Developer mode"** (toggle in top right)
3. Click **"Load unpacked"**
4. Select the downloaded `AI-Summarizer` folder
5. The extension will appear in your extensions list

### 4. Configure API Key

1. Click the extension icon in your Chrome toolbar
2. Click **"Settings"** button
3. Paste your Gemini API key
4. Click **"Test API Key"** to verify it works
5. Click **"Save Settings"**

## 🎯 How to Use

### Basic Usage
1. **Navigate** to any article or webpage with text content
2. **Click** the AI Summary extension icon in your toolbar
3. **Select** your preferred summary type:
   - **Brief Summary**: 2-3 sentence overview
   - **Detailed Summary**: Comprehensive analysis
   - **Key Points**: Bullet-point format
4. **Click "Summarize"** and wait for the AI to process
5. **Copy** the summary using the copy button

### Advanced Features
- **Smart Content Detection**: The extension automatically finds article content using multiple detection methods
- **Error Handling**: Clear error messages if content can't be extracted or API issues occur
- **Responsive Design**: Works seamlessly across different screen sizes

## 📁 Project Structure

```
AI-Summarizer/
├── manifest.json          # Extension configuration
├── background.js          # Service worker for extension lifecycle
├── content.js            # Content script for text extraction
├── popup.html            # Main extension popup interface
├── popup.js              # Popup functionality and API calls
├── options.html          # Settings page
├── options.js            # Settings functionality
└── README.md             # This file
```

## 🔧 Key Files Explained

### `manifest.json`
- Defines extension permissions and structure
- Configures content scripts and service worker
- Specifies popup and options pages

### `content.js`
- Extracts readable content from web pages
- Uses multiple selectors to find article text
- Handles various website layouts automatically

### `popup.js`
- Main extension logic and UI interactions
- Integrates with Gemini API for summarization
- Manages different summary types and error handling

### `options.js`
- API key configuration and validation
- Secure storage management
- API connection testing functionality

## 🔐 Privacy & Security

- **Local Storage Only**: Your API key is stored locally in Chrome's sync storage
- **No Data Collection**: No user data is collected or transmitted to external servers
- **Secure API Calls**: Direct communication with Google's Gemini API only
- **No Third-party Tracking**: Extension operates independently without external dependencies

## 🎨 Customization

### Modifying Summary Types
Edit the prompt templates in `popup.js`:

```javascript
// Brief summary prompt
prompt = `Please provide a brief, concise summary of this article in 2-3 sentences...`;

// Detailed summary prompt  
prompt = `Please provide a comprehensive summary of this article...`;

// Bullet points prompt
prompt = `Please summarize this article as 5-7 key bullet points...`;
```

### Styling the Interface
- Modify `popup.html` styles for UI customization
- Update `options.html` for settings page styling
- All styles are inline for extension compatibility

### Content Detection
Enhance content extraction in `content.js` by adding new selectors:

```javascript
const selectors = [
  'article',
  '[role="main"]',
  '.your-custom-selector', // Add your selectors here
  // ... existing selectors
];
```

## 🔧 Development

### Testing Locally
1. Make your changes to the code
2. Go to `chrome://extensions/`
3. Click the refresh icon on your extension
4. Test the updated functionality

### Debugging
- Use Chrome DevTools for popup debugging
- Check `chrome://extensions/` for error logs
- Use `console.log()` statements for troubleshooting

## 📦 Distribution

### Chrome Web Store Preparation
1. Create extension screenshots and promotional images
2. Write store description and metadata
3. Package extension as ZIP file
4. Submit for review following [Chrome Web Store guidelines](https://developer.chrome.com/docs/webstore/)

### Manual Distribution
1. Package the extension folder as a ZIP file
2. Share with users for local installation
3. Provide setup instructions for API key configuration

## 🐛 Troubleshooting

### Common Issues

**"API key not found" error:**
- Ensure you've configured your Gemini API key in settings
- Verify the API key starts with "AIza"
- Test the API key using the built-in test function

**"Could not extract readable content" error:**
- Try refreshing the page and summarizing again
- Some websites may block content extraction
- Ensure the page has sufficient text content

**Extension not appearing:**
- Check that Developer mode is enabled in Chrome
- Verify all files are in the correct directory structure
- Look for errors in `chrome://extensions/`

**API rate limiting:**
- Gemini API has usage limits for free tier
- Wait a few minutes before trying again
- Consider upgrading to a paid plan for higher limits

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Make** your changes
4. **Test** thoroughly with the extension
5. **Commit** your changes (`git commit -m 'Add amazing feature'`)
6. **Push** to the branch (`git push origin feature/amazing-feature`)
7. **Open** a Pull Request

### Development Guidelines
- Follow Chrome Extension best practices
- Test on multiple websites and content types
- Ensure compatibility with Manifest V3
- Maintain clean, readable code with comments

## 📝 API Information

### Gemini API Details
- **Model**: gemini-1.5-flash
- **Endpoint**: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent`
- **Max Input**: ~15,000 characters (automatically truncated)
- **Max Output**: 1,000 tokens
- **Rate Limits**: Varies by API tier

### API Configuration
```javascript
generationConfig: {
  temperature: 0.3,      // Lower temperature for more focused summaries
  maxOutputTokens: 1000  // Limit response length
}
```

## 🆘 Support

If you encounter issues or have questions:

1. **Check** the troubleshooting section above
2. **Search** existing GitHub issues
3. **Create** a new issue with:
   - Chrome version
   - Extension version
   - Steps to reproduce the problem
   - Error messages (if any)

## 🚀 Future Enhancements

- [ ] Support for PDF document summarization
- [ ] Multiple language support for summaries
- [ ] Custom prompt templates
- [ ] Summary history and favorites
- [ ] Export summaries to various formats
- [ ] Dark theme option
- [ ] Keyboard shortcuts
- [ ] Integration with note-taking apps
- [ ] Batch processing for multiple articles
- [ ] Summary quality rating system

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini AI** - For providing the powerful summarization API
- **Chrome Extensions Team** - For the robust extension platform
- **Open Source Community** - For inspiration and best practices

## 📞 Contact

- **GitHub**: [@jishkhar](https://github.com/jishkhar)
- **Issues**: [GitHub Issues](https://github.com/jishkhar/AI-Summarizer/issues)

---

⭐ **If this extension helped you save time reading articles, please consider giving it a star on GitHub!**

**Built with ❤️ by [jishkhar](https://github.com/jishkhar) | Powered by Google Gemini AI**
