  <h1 align="center">Wibu Store</h1>

## Check it out 👇

https://wibustore.netlify.app/

## About the project 🤡

This project is an e-commerce website for selling shoes that provide some basic functionalities for Admin user and Regular user

## Getting Started 😎

This is an example of how you may give instructions on setting up our project locally.
To get a local copy up and running follow these simple example steps.

### Links

API: https://629f1565461f8173e4e04579.mockapi.io/products

Trello: https://trello.com/invite/b/HTiUAbHk/c0f783d981f2179a58eb8821aefa88a9/sneaker

### API Usage

1. GET all products -> Endpoint: /product

Response:

```
   [
     {
       "id": "number",
       "name": "string",
       "image": "string",
       "price": "string",
       "inStock": "string",
       "description": "string";
     },
     {
       "id": "number",
       "name": "string",
       "image": "string",
       "price": "string",
       "inStock": "string",
       "description": "string";
     },
   ]
```

2. POST create product -> Endpoint: /product

Params

```
   {
     "name": "string",
     "image": "string",
     "price": "string",
     "inStock": "string",
     "description": "string";
   }
```

3.  PUT edit product -> Endpoint: /product/{productId}

Params

```
   {
     "name": "string",
     "image": "string",
     "price": "string",
     "inStock": "string",
     "description": "string";
   }
```

4.  DELETE product -> Endpoint: /product/{productId}

### Setting Up Environment

```
  Node.js >= v14.17.4
  NPM >= v6.14.14

  OS: Linux, MacOS or Window
```

<p align="right">(<a href="#top">back to top</a>)</p>

### Installation ⚙️

1. Clone the repo

   ```sh
   git clone https://github.com/lcnhut/wibu-store.git
   ```

2. Change directory to that folder

   ```sh
   cd wibu-store
   ```

3. Install all dependencies, please install everytime you pull new code

   ```sh
   npm i
   ```

4. Build and serve the websites

   ```sh
   npm run dev
   ```

5. If everything works correctly, you could visit the website on [http://localhost:3000](http://localhost:3000)

   The page will reload when you make changes.
   You may also see any lint errors in the console.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ## Usage  👀
Adminstrator user
```
email: admin@gmail.com
password: Admin@123
```

Regular user
```
email: nhut@gmail.com
password: Nhut@123
```

<p align="right">(<a href="#top">back to top</a>)</p> -->

## Contributing 🤜🤛

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>
