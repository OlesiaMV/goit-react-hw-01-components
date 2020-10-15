import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./components/App";
// import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()

// const link = React.createElement(
//   "a",
//   {
//     href: "https://reactjs.org/",
//     target: "_blank",
//     rel: "noreferrer noopener",
//   },
//   "Ссылка на reactjs.org"
// );

// JSX

// const linkWithJSX = (
//   <a href="https://reactjs.org/" target="_blank" rel="noreferrer noopener">
//     Ссылка на reactjs.org
//   </a>
// );

// console.log(linkWithJSX);

// const image = React.createElement("img", {
//   src:
//     "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
//   alt: "Tacos With Lime",
//   width: 640,
// });

// const title = React.createElement('h2', null, 'Tacos With Lime');
// const price = React.createElement('p', null, 'Price: 10.99$');
// const button = React.createElement('button', { type: 'button' }, 'Add to cart');

////

// const product = React.createElement('div', null, image, title, price, button);

//// ИЛИ

// const product = React.createElement('div', {
//   children: [image, title, price, button]});

// JSX

// const imageUrl =
//   "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
// const price = 10.99;

// const product = (
//   <div>
//     <img src={imageUrl} alt="Tacos With Lime" width="640" />
//     <h2>Tacos With Lime</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// console.log(product);

// ReactDOM.render(link, document.querySelector("#root"));
// ReactDOM.render(product, document.querySelector("#root"));

ReactDOM.render(<App />, document.querySelector("#root"));