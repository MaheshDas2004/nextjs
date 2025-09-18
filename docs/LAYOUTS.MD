# Layouts in Next.js

Pages are route specific UI components that means each page is tied to a specific route in your application.

A Layout is UI that is shared between multiple pages in your app for example a navigation bar or footer.

#how to create a layout 
default export a react component from  `layout.js` or `layout.tsx` file inside a folder in the `app/` directory.

That component takes a children prop that will be the content of the page that is being rendered.


Nested layouts
You can create nested layouts by adding `layout.js` files in nested folders. Each layout will wrap the content of its child routes.
For example, if you have a `layout.js` file in the `app/` directory and another `layout.js` file in the `app/dashboard/` directory, the layout in the `app/dashboard/` directory will wrap the content of all pages under `/dashboard`, while the layout in the `app/` directory will wrap everything.

simple use case of layout for example in product details page you want to show product images and details in the main section of the page and in the sidebar you want to show related products so you can create a layout for that.