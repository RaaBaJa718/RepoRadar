## RepoRadar 🚀

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

RepoRadar is a candidate search application that integrates with the GitHub API to retrieve and display developer profiles and repository data in the browser. This tool helps users efficiently find coding talent based on relevant GitHub activity.

## Features 🌟
- Fetches developer profiles from GitHub
- Displays repository details in an intuitive UI
- Uses efficient API calls for seamless data retrieval
- Provides insights into candidates’ coding activity

  ## Installation 🛠

![Screenshot 2025-05-08 154549](https://github.com/user-attachments/assets/0e1de7f5-218b-4af4-9c42-0268c170d990)


## Usage 📖
- Enter a GitHub username to fetch candidate details
- View their repositories and activity in a clean, user-friendly format
- Use filters to refine search results

## Technologies Used ⚙️
- JavaScript
- Node.js
- Express
- GitHub API
- React (optional, based on UI implementation)

## Contributions 🤝
Contributions are welcome! Feel free to submit issues and pull requests to improve RepoRadar.

## License 📜
This project is licensed under the MIT License.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md), which uses [Babel](https://babeljs.io/) for Fast Refresh
* [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc), which uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you're developing a production application, we recommend updating the configuration to enable type-aware lint rules:

* Configure the top-level `parserOptions` property as follows:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

* Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.
* Optionally, add `plugin:@typescript-eslint/stylistic-type-checked`.
* Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` and `plugin:react/jsx-runtime` to the `extends` list.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
