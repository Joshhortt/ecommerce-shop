23 October 2022
# E-commerce shop
#### By _**Josh Hortt**_
version: 23/10/2022
## Description
_This application is about an E-commerce Hardware store for small businesses_<br/>
_It was built for a local business client_<br/>
_It uses the portuguese language_<br/>
_It is Developed in React.js_<br/>
_This E-commerce application includes modern design and animations,the_<br/>
_ability to add and edit products on the go using a Sanity CMS, all advanced cart,_<br/>
_and checkout functionalities, and most importantly, the complete integration_<br/>
_with Stripe so that the user can cover real payments_.
_It can be used for any kind of E-commerce store (Fashion, Jewellry, etc..)_.

## E-commerce shop 🎧 🔊 | [Live Link](https://vercel.com/)
## Technologies Used

* JavaScript
* React.js
* Next.js
* CSS-3
* Sanity CMS

##  Learning Context:
|No| Context learn by doing this project...                             | 
|--|--------------------------------------------------------------------|
| 1| Dynamic Routing                                                    | 
| 2| File Base Routing                                                  | 
| 3| Folder Structure                                                   | 
| 4| Layout Architecture                                                | 
| 5| Global Vanilla CSS                                                 | 
| 6| `Stripe` for Payment Gateway                                       | 
| 7| Data fetching from `BackEnd`                                       | 
| 8| Connect `Sanity` BackEnd with `Next-Js`                            | 
| 9| `Context API` for globally data sharing...                         | 
|10| Project data flow functional Architecture...                       | 
|11| `react-hot-toast` for displaying notification                      | 
|12| `canvas-confetti` firework animation for success sms               | 
|13| `getStripe` function call, in `SingleTon Pattern` style            | 
|14| Image change at hover state by the help of `onMouseEnter` attribute| 
|15| get`Static`Paths() ==> `SSG` ( statically `pre-render all the paths` )     | 
|16| get`Static`Props() ==> `SSG` ( `pre-render` fetching data at `build time` )| 
|17| get`ServerSide`Props() ==> `SSR` ( fetching data at `each user request` )  |



<br/>

```
npm --legacy-peer-deps 
```
> run this short command for installing updated packages... <br/>
> that listed inside dependencies { object } based on `package.json` file.


## NPM | Dependencies...
|No| Package Installs               | Use for...          |
|--|--------------------------------|---------------------|
| 1| npm i `@babel/core`         | slider              |
| 2| npm i `@sanity/cli`         | managing Sanity installations, schemas & DB          |
| 3| npm i `@sanity/client`      | Client for read, create & update data from Sanity.io |
| 4| npm i `@sanity/image-url`   | Tools to generate image urls from Sanity content     |
| 5| npm i `@stripe/stripe-js`   | Stripe.js loading utility |
| 6| npm i `stripe`              | payment gateway     |
| 7| npm i `react-icons`         | icons at UI         |
| 8| npm i `react-hot-toast`     | short notification  |
| 9| npm i `canvas-confetti`     | performant confetti animation in the browser         |
|10| npm i `next-sanity-image`   | Utility for using responsive image host in Sanity.io |

## File Structure...
```
🟨
    ecommerce-shop
    |
    ├── components
    |   ├── Cart.jsx
    |   ├── Footer.jsx
    |   ├── FooterBanner.jsx
    |   ├── HeroBanner.jsx
    |   ├── index.js
    |   ├── Layout.jsx
    |   ├── Navbar.jsx
    |   └── Product.jsx
    |
    ├── context
    |   └── StateContext.js     |🌐| Global Data Sharing |🌐|
    |
    ├── lib
    |   ├── client.js           |🟠| Sanity Connection Configuration  |🟠|
    |   ├── getStripe.js        |🟠| getStrip key- SingleTon Pattern  |🟠|
    |   └── utils.js            |🟠| Success animation after purchase |🟠|
    |
    ├── pages
    |   ├── api                 |🟨| BackEnd |🟨|
    |   |   └── stripe.js       |🟨| BackEnd |🟨|
    |   |
    |   ├──product
    |   |  └── [slug].js
    |   |
    |   ├── _app.js
    |   ├── index.js
    |   └── success.jsx
    |
    ├── sanity_ecommerce        |🔶| Headless CMS |🔶|
    |   └── schemas             |🔶| Headless CMS |🔶|
    |       ├── banner.js       |🔶| Headless CMS |🔶|
    |       ├── product.js      |🔶| Headless CMS |🔶|
    |       └── schema.js       |🔶| Headless CMS |🔶|
    |
    └── styles
        └── globals.css
🟨
```

## User Specifications
  - User searches for products which the user wants to purchase.
  - by clicking on the image the user is able to see the choosen product details. 
  - User adds (adicionar) one or more products to the shopping cart.
  - User checks the shopping cart (carrinho de compras) to confirm if all products are showing up.
  - User can add (+) or remove (-) the quantity of choosen products.
  - User can see and confirm the total price of purchase inside the shopping cart.
  - User can pay with Stripe by clicking the Pay with stripe (Finalizar compra).

## Setup/Installation Requirements
_Clone repository in a shell using the command_:<br/>
`git clone https://github.com/Joshhortt/ecommerce-shop`

## Known Bugs
_Due to time constraints the site may not scale perfectly on every device._

## Support and contact details
_If you have any questions or find any issues with this web-application, get in touch_.<br/>
_My email is: joshhortt@yahoo.com_

### License
_**MIT License** Copyright (c) 2022 Josh Hortt_
