# NihonNav🎌

A curated collection of anime, manga, and related resources - from streaming platforms to development tools. This project aims to provide a comprehensive list of resources for anime and manga enthusiasts.

## 🌟 Features

- Clean, modern interface with dark theme
- Categorized resources with detailed descriptions
- Mobile-responsive design
- Filter resources by category and type
- Tags for quick identification of features
- Animated UI elements for better user experience


## 🗂️ Categories

- **Anime**: Streaming platforms, downloading sources, and apps
- **Listing**: Databases and scheduling tools
- **Manga**: Reading platforms and applications
- **Light Novels**: Reading websites and apps
- **Visual Novels**: Stores and platforms
- **Music**: Anime music resources
- **Forums**: Community discussion platforms
- **News**: Anime and manga news sources
- **Development**: APIs and tools for developers

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Kochou11/Anime-source-list.git
```

2. Open `index.html` in your browser

No build process is required as this is a static website.

## 📁 Project Structure

```
project/
├── index.html
├── favicon
├── assets/
│   └── css/
│       └── style.css
│ 
├── config/
│   ├── descriptions.js
│   ├── sections.js
│   └── icons.js
├── sources/
│   ├── anime.js
│   ├── listing.js
│   ├── manga.js
│   ├── novels.js
│   ├── forum.js
│   ├── news.js
│   ├── music.js
│   ├── development.js
│   └── nsfw.js
├── utils/
│     └── modal.js
├── main.js
└── README.md
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Adding New Sources

1. Fork the repository
2. Navigate to the appropriate file in the `sources` directory
3. Add your source following this format:

```javascript
{
    name: 'Source Name',
    url: 'https://example.com',
    desc: 'Brief description of the source',
    tags: ['Tag1', 'Tag2'],
    image: 'https://example.com/favicon.ico'
}
```

### Source Requirements

- **Active**: Sources should be currently active and maintained
- **Description**: Provide a clear, concise description
- **Tags**: Include relevant tags that describe key features
- **Image**: Include a favicon or logo URL
- **Working Links**: Ensure all URLs are functional

### Guidelines for Descriptions

- Keep descriptions under 200 characters
- Include key features and limitations
- Mention if the source is official/unofficial
- Note any significant restrictions (region locks, registration requirements)

### Adding New Categories

To add a new category:

1. Create a new file in `sources` for your category
2. Add the category configuration to `config/descriptions.js`
3. Add the category sections to `config/sections.js`
4. Add the category icon to `config/icons.js`
5. Add the data variable from your `sources` in `main.js`
6. Update `index.html` to include the new tab

### Pull Request Process

1. Ensure your PR title clearly describes the changes
2. Update the README.md if needed
3. Reference any related issues
4. Submit the pull request


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Kochou11/Anime-source-list/blob/main/LICENSE) file for details.

## 🙏 Acknowledgments

- All the awesome websites and services listed
- The anime and manga community
- Contributors who help maintain and improve this list

## ⚠️ Disclaimer

This project is not affiliated with any of the services listed. All logos and trademarks belong to their respective owners. This is merely a curated list of resources.

---
