# Next.js Tutorial

## Differences between React and Next.js
React is a JavaScript library for building user interfaces, while Next.js is a framework built on top of React that provides additional features and optimizations for building server-rendered and statically generated web applications. Next.js offers built-in routing, server-side rendering, static site generation, and API routes, making it easier to create full-featured web applications compared to using React alone.the major difference is that React is a library for building user interfaces, while Next.js is a framework that provides a complete solution for building web applications.


This is a simple Next.js application created as part of a tutorial to demonstrate the basics of building a web application using Next.js. The application displays a "Hello, Next.js!" message on the homepage.

## Getting Started
To get started with this project, follow these steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repo
   ```
3. Install the dependencies:
   ```bash
   pnpm install # or npm install or yarn install
   ```
4. Run the development server:
   ```bash
   pnpm dev # or npm run dev or yarn dev
   ```
5. Open your browser and go to `http://localhost:3000` to see the application in action.

## Differences between Pages and Layouts in Next.js
In Next.js, both pages and layouts are essential components of the application structure, but they serve different purposes.
- **Pages**: Pages are the main entry points for your application. Each file in the `pages` directory automatically becomes a route in your application. For example, a file named `about.js` in the `pages` directory will be accessible at `/about`. Pages are responsible for rendering the content of a specific route and can include components, data fetching, and other logic specific to that page.
- **Layouts**: Layouts, on the other hand, are used to define a common structure or template that can be shared across multiple pages. Layouts typically include elements like headers, footers, and navigation menus that remain consistent across different pages. In Next.js, you can create a layout component and wrap your pages with it to ensure a uniform look and feel throughout your application.

# How to create pages and layouts in Next.js
1. **Creating a Page**:
    - Create a new file in the `pages` directory. For example, to create an "About" page, create a file named `about.js`:
      ```jsx
      // pages/about.js
      export default function About() {
        return <h1>About Us</h1>;
      }
      ```
    - This page will be accessible at `http://localhost:3000/about`.
2. **Creating a Layout**:
    - Create a new file in the `components` directory (or any directory of your choice) for the layout. For example, create a file named `Layout.js`:
      ```jsx
      // components/Layout.js
      import React from 'react';

      const Layout = ({ children }) => {
        return (
          <div>
            <header>
              <h1>My Website</h1>
            </header>
            <main>{children}</main>
            <footer>
              <p>&copy; 2023 My Website</p>
            </footer>
          </div>
        );
      };

      export default Layout;
        ```
    - Wrap your pages with the layout component. You can do this in the `_app.js` file:
      ```jsx
      // pages/_app.js
      import Layout from '../components/Layout';

      function MyApp({ Component, pageProps }) {
        return (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        );
      }

      export default MyApp;
      ```
# React Server Components:
React Server Components (RSC) is a new feature in React that allows developers to build components that can be rendered on the server. This means that the components can fetch data and perform other server-side operations before being sent to the client. RSCs are designed to improve performance and reduce the amount of JavaScript that needs to be sent to the client, resulting in faster load times and a better user experience.
this architecture introduces a new approach to creating react components by dividing them into server components and client components. 

Server components are rendered on the server and can fetch data directly from the server, while client components are rendered on the client and can handle user interactions and state management. This separation allows for better performance and scalability, as server components can be optimized for server-side rendering, while client components can be optimized for client-side interactivity.

by default nextjs treats all components as server components. to create a client component you need to add "use client" directive at the top of the file.
