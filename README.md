# missha-eshop
Missha E-shop is an e-commerce clothing website that offers a wide range of trendy and fashionable clothing options for men and women. The website is built using Strapi for efficient database management, React for the front and back ends, and Stripe for secure and seamless payment processing.

## Features
- **Extensive Clothing Selection**: Explore a diverse collection of clothing items for men and women. From casual to formal wear.
- **User-friendly Interface**: Enjoy a seamless browsing experience with a clean and intuitive user interface. Easily navigate through different categories and find the perfect clothing items with ease.
- **Secure Payments**: Feel confident in your online transactions with Stripe integration, ensuring safe and secure payment processing. Protect your personal and financial information while enjoying a hassle-free shopping experience.
- **Efficient Database Management**: With Strapi, a headless CMS (Content Management System), the website efficiently manages its database, ensuring smooth inventory management and seamless product updates.

## Installation
To run the Missha E-shop locally on your machine, follow these steps:

1. Clone the repository
```bash
$ git clone https://github.com/hatatwit/missha-eshop.git
```
2. Install dependencies
```bash
$ cd api
$ npm install
$ cd ..
$ cd client
$ npm install
```
3. Configure your environment variables for Stripe integration and Strapi database connection in the .env file. Read prerequisites section for more instructions.
4. Start the front-end and back-end servers by open two separate terminal:
- **Terminal 1**
```bash
$ cd client
$ npm start
```
- **Terminal 2**
```bash
$ cd api
$ ENV_PATH=./.env.production NODE_ENV=production npm run start
```
5. Access Missha E-shop in your browser at [http://localhost:3000](http://localhost:3000).
6. Access Strapi Database in your browser at [http://127.0.0.1:1337/admin](http://127.0.0.1:1337/admin) and create your admin account.

## Prerequisites
Before you start, ensure that you have the following prerequisites:
* Create Stripe account and get API keys
* Create Railway account and deploy Postgres Database to get its environment variables

To set up the .env file, please follow these steps:
### ./missha-eshop/api/.env

```bash
HOST=0.0.0.0
PORT=1337
APP_KEYS=[YOUR_APP_KEY]
API_TOKEN_SALT=[YOUR_API_TOKEN_SALT]
ADMIN_JWT_SECRET=[YOUR_ADMIN_JWT_SECRET]
TRANSFER_TOKEN_SALT=[YOUR_TRANSFER_TOKEN_SALT]
# Database
DATABASE_CLIENT=postgres
DATABASE_HOST=127.0.0.1
DATABASE_PORT=5432
DATABASE_NAME=[YOUR_DATABASE_NAME]
DATABASE_USERNAME=[YOUR_DATABASE_USERNAME]
DATABASE_PASSWORD=[YOUR_DATABASE_PASSWORD]
DATABASE_SSL=true
# Stripe
STRIPE_KEY=[YOUR_STRIPE_KEY]
CLIENT_URL=http://localhost:3000

```

### ./missha-eshop/api/.env.production
```bash
NODE_ENV=production
HOST=127.0.0.1
PORT=1337
APP_KEYS=[YOUR_APP_KEYS]
API_TOKEN_SALT=[YOUR_API_TOKEN_SALT]
ADMIN_JWT_SECRET=[YOUR_ADMIN_JWT_SECRET]
TRANSFER_TOKEN_SALT=[YOUR_TRANSFER_TOKEN_SALT]
JWT_SECRET=[YOUR_JWT_SECRET]
# Database
PGPASSWORD=[YOUR_PGPASSWORD]
PGHOST=[YOUR_PGHOST]
PGPORT=[YOUR_PGPORT]
PGUSER=postgre
PGDATABASE=[YOUR_PGDATABASE]
# Cloudinary Plugin
CLOUDINARY_KEY=[YOUR_CLOUDINARY_KEY]
CLOUDINARY_NAME=[YOUR_CLOUDINARY_NAME]
CLOUDINARY_SECRET=[YOUR_CLOUDINARY_SECRET]
# Stripe
STRIPE_KEY=[YOUR_STRIPE_KEY]
CLIENT_URL=http://localhost:3000

```
### ./missha-eshop/client/.env
```bash
REACT_APP_API_KEY=[YOUR_STRAPI_API_KEY] 
REACT_APP_API_URL=http://127.0.0.1:1337/api
REACT_APP_API_UPLOAD_URL=http://127.0.0.1:1337
REACT_APP_STRIPE_PUBLISHABLE_KEY=[YOUR_STRIPE_PUBLISHABLE_KEY] 

```

## Demo

Let's check out [Missha E-Shop](https://missha.netlify.app) website!

## Build with
* HTML
* CSS
* Sass 
* React
* React Router
* Redux Toolkits
* Context
* Stripe
* Strapi
* Netlify
* Railway

## License

[MIT](https://choosealicense.com/licenses/mit/)
