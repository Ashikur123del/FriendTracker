# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



1. State Persistence: Managing and saving interaction data (Call/Text/Video) so it doesn't disappear when the page is refreshed.

2. Conditional Styling: Automatically changing card colors and icons based on friendship status (overdue, on-track, etc.) using Tailwind.

3. Data Mapping for Charts: Converting raw interaction history into a specific format to display the Recharts Pie Chart correctly.

4. Responsive Layout: Making the complex two-column detail page and the 4-column home grid work perfectly on mobile and desktop.

5. Dynamic Filtering: Implementing a smooth logic to filter the Timeline by activity type without losing the original data.

6. Route Handling: Managing the 404 error page and ensuring that direct links work properly after deployment on Vercel/Netlify.