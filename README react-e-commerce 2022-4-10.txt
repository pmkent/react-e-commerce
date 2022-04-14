2022-4-13

1:08:59 / 6:17:16
08- Fetch Products
#React #Node #Tutorial
MERN ECommerce Course 2022


7. Backend server 1:00:58 / 6:17/16

From now on use
npm start
instead of 'node server.js'

backent/package.json
server section
"start": "nodemon server.js",

npm install nodemon --save-dev (ship this package only for development - devDependencies in package.json?)
Install nodemon to refresh the server whenever there is a change in the server code.

http://localhost:5000/api/products - Now works!

PS C:\phil\dev\projects\tutorials\reactjs\react-e-commerce\back-end> node server.js
Now serving at http://localhost:5000

call back function () => {}

PS C:\phil\dev\projects\tutorials\reactjs\react-e-commerce\back-end> npm install express

npm init

package.json
"type": "module", // to use ?? we are going to use 'import' instead of 'require' to use ES6 marshall to import and export

PS C:\phil\dev\projects\tutorials\reactjs\react-e-commerce> cd .\back-end\
PS C:\phil\dev\projects\tutorials\reactjs\react-e-commerce\back-end> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (back-end)
version: (1.0.0)
description: NodeJS backend server for products and probably orders
entry point: (index.js)
test command:
git repository:
keywords: NodeJS, Server, Back-end
author: Phil MK
license: (ISC)
About to write to C:\phil\dev\projects\tutorials\reactjs\react-e-commerce\back-end\package.json:

{
  "name": "back-end",
  "version": "1.0.0",
  "description": "NodeJS backend server for products and probably orders",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "NodeJS",
    "Server",
    "Back-end"
  ],
  "author": "Phil MK",
  "license": "ISC"
}

Is this OK? (yes) yes

$$

https://www.youtube.com/watch?v=CDtPMR5y0QU
59:33 / 6:17:16
06- Add Routing
#React #Node #Tutorial
MERN ECommerce Course 2022 - Build Full ECommerce Website For All Levels Developers By React & Node

Note: Changing HREFs to Link saves refresh trip and makes the page SPA!

6. Add routing
  1. npm i react-router-dom
  2. create rout for home screen
  3. create route for product screen

https://www.npmjs.com/package/react-router-dom
npm i react-router-dom

2022-4-11
48:00 / 6:17:16
05- List Products
#React #Node #Tutorial
React Course 2022 - MERN ECommerce Like Amazon In 6 Hours

$$$$$

Move .gitignore to the root node_modules, build (instead of /node_modules. /build)

philm@DESKTOP-5VCQQ9O MINGW64 /c/phil/dev/projects/tutorials/reactjs/react-e-commerce/front-end (master)
rm -rf .git

README react-e-commerce 2022-4-10
C:\phil\dev\projects\tutorials\reactjs>npx create-react-app react-e-commerce

https://www.youtube.com/watch?v=CDtPMR5y0QU
React Course 2022 - MERN ECommerce Like Amazon In 6 Hours
13,304 viewsMar 2, 2022
Coding with Basir
37.6K subscribers

https://github.com/basir/mern-amazona

Lessons
1.Introduction
2. Install Tools
3. Create React App
4. Create Git Repository
5. List Products
  i. create products array
  ii. add product images
  iii. render products
  iv. style products
6. Add page routing
  i. npm i react-router-dom
  ii. create route for home screen
  iii. create router for product screen
7. Create Node.JS Server
  i. run npm init in root folder
  ii. Update package.json set type: module
  iii. Add server.js to back-end??? imports
  iv. npm install express
  v. Create server.js
  vi. Add start command as node backend/server.js
  vii. require express
  viii. create route for / return backend is ready.
  ix. move products.js from frontend to backend
  x. create route for /api/products
  xi. return products
  xii. run npm start
Fetch Products From Backend
set proxy in package.json
npm install axios
use state hook
use effect hook
use reducer hook
Manage State By Reducer Hook
define reducer
update fetch data
get state from usReducer
Add bootstrap UI Framework
npm install react-bootstrap bootstrap
update App.js
Create Product and Rating Component
create Rating component
Create Product component
Use Rating component in Product component
Create Product Details Screen
fetch product from backend
create 3 columns for image, info and action
Create Loading and Message Component
create loading component
use spinner component
craete message component
create utils.js to define getError fuction
Create React Context For Add Item To Cart
Create React Context
define reducer
create store provider
implement add to cart button click handler
Complete Add To Cart
check exist item in the cart
check count in stock in backend
Create Cart Screen
create 2 columns
display items list
create action column
Complete Cart Screen
click handler for inc/dec item
click handler for remove item
click handler for checkout
Create Signin Screen
create sign in form
add email and password
add signin button
Connect To MongoDB Database
create atlas monogodb database
install local mongodb database
npm install mongoose
connect to mongodb database
Seed Sample Products
create Product model
create seed route
use route in server.js
seed sample product
Seed Sample Users
create user model
seed sample users
Create Signin Backend API
create signin api
npm install jsonwebtoken
define generateToken
Complete Signin Screen
handle submit action
save token in store and local storage
show user name in header
Create Shipping Screen
create form inputs
handle save shipping address
add checkout wizard bar
Create Sign Up Screen
create input forms
handle submit
create backend api
Implement Select Payment Method Screen
create input forms
handle submit
Create Place Order Screen
show cart items, payment and address
calculate order summary
Implement Place Order Action
handle place order action
create order create api
Create Order Screen
create backend api for order/:id
fetch order api in frontend
show order information in 2 cloumns
Pay Order By PayPal
generate paypal client id
create api to return client id
install react-paypal-js
use PayPalScriptProvider in index.js
use usePayPalScriptReducer in Order Screen
implement loadPaypalScript function
render paypal button
implement onApprove payment function
create pay order api in backend
Display Order History
create order screen
create order history api
use api in the frontend
Create Profile Screen
get user info from context
show user information
create user update api
update user info
Publish To Heroku
create and config node project
serve build folder in frontend folder
Create heroku account
connect it to github
Create mongodb atlas database
Set database connection in heroku env variables
Commit and push
Add Sidebar and Search Box
add sidebar
add search box
Create Search Screen
show filters
create api for searching products
display results
Create Admin Menu
define protected route component
define admin route component
add menu for admin in header
Create Dashboard Screen
create dashboard ui
implement backend api
connect ui to backend
Manage Products
create products list ui
implement backend api
fetch data
Create Product
create products button
implement backend api
handle on click
Create Edit Product
create edit button
create edit product ui
dispaly product info in the input boxes
Implement Update Product
create edit product backend api
handle update click
Upload Product Image
create cloudinary account
use the api key in env file
handle upload file
implement backend api to upload
Delete Product
show delete button
implement backend api
handle on click
List Orders
create order list screen
implement backen api
fetch and display orders
Deliver Order
add deliver button
handle click action
implement backen api for deliver
Delete Order
add delete button
handle click action
implement backen api for delete
List Users
create user list screen
implement backen api
fetch and display users
Edit User
create edit button
create edit product ui
dispaly product info in the input boxes
implement backend api
handle edit click
Delete User
add delete button
handle click action
implement backen api for delete
Choose Address On Google Map
create google map credentials
update .env file with Google Api Key
create api to send google api to frontend
create map screen
fetch google api
getUserLocation
install @react-google-maps/api
use it in shipping screen
apply map to the checkout screen
Email order receipt by mailgun
create mailgun account
add and verify your domain to mailgun
install mailgun-js
set api key in env file
change pay order in orderRouter
send email order receipt
Review Products
create submit review form
handle submit
implement backend api for review
Upload multiple Images
add images to product model
get images in edit screen
show images in product screen