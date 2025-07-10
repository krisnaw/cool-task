# Misago

A Node.js project built with Hono and TypeScript.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- pnpm

### Installation

1.  Clone the repo
    ```sh
    git clone <repository-url>
    ```
2.  Install NPM packages
    ```sh
    pnpm install
    ```

## Available Scripts

In the project directory, you can run:

### `pnpm dev`

Runs the app in the development mode using `tsx`.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The app will reload if you make edits.

### `pnpm build`

Builds the app for production to the `dist` folder.
It correctly bundles the app in production mode and optimizes the build for the best performance.

### `pnpm start`

Runs the built app in production mode.

### `pnpm lint`

Lints the code using ESLint.

### `pnpm lint:fix`

Lints the code and automatically fixes problems.

## Documentation

The API documentation is generated using `@scalar/hono-api-reference` and is available at the `/doc` endpoint when the application is running.

## Folder Structure

The folder structure for this project is as follows:

```
/
├── .env.example
├── .gitignore
├── eslint.config.js
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.json
├── .git/
├── .idea/
├── .vscode/
├── node_modules/
└── src/
    ├── app.ts
    ├── env.ts
    ├── index.ts
    ├── lib/
    │   ├── configure-open-api.ts
    │   ├── create-app.ts
    │   └── types.ts
    ├── middlewares/
    │   └── pino-loggers.ts
    └── routes/
        ├── index.route.ts
        └── tasks/
            ├── tasks.handlers.ts
            ├── tasks.index.ts
            └── tasks.routes.ts
```
