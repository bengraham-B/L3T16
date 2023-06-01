# GOOSE_RELOADED

## How to Use the App

GOOSE_RELOADED is a website that allows users to save data regarding their reload parameters, update their current data, and delete any reloads the user no longer requires. This will allow users to track and improve their overall shooting performance.

## Reload Parameters

Reload parameters will include:

- Bullet Head
  - Size
  - Type
  - Make

- Cartridge
  - Size
  - Type
  - Make

- Powder
  - Make

- Primer
  - Make

Firstly, a user will need to login or signup, where they will be directed to the home page, which shows their total reloads and a button that will allow them to go to their reload page.

On the reload page, the total number of reloads the user has is displayed along with a button to add a new reload. Clicking the reload button will navigate the user to a form where they can input all their reloading data.

---

## To run the app on your local machine
### To run the frontend
```
npm start
```

### To start the express server, navigate to the server folder
```
cd server
npm start
```

---

## Security Measures

Helmet.js has been used on the server to add an extra layer of protection.

With regard to storing user's passwords, they are hashed using the bcryptjs library, which ensures that in the case of a data breach, users will have enough time to change their passwords.

---

## Backend Deployment

The backend has been deployed alongside the frontend on Vercel.

This allows for simple deployment and improved performance as there will be less latency when users make requests to the server. Data travels within the server, reducing the need to go over the internet. The frontend and backend can communicate directly with each other without going through APIs or external networks.

---

## Admin User

- Username: adminuser@gmail.com
- Password: #Workz123

This will allow you to access the admin features of the application.

## Normal User

- Username: normaluser@gmail.com
- Password: Mhip178!

---

## Links

- GitHub: [https://github.com/bengraham-B/L3T16](https://github.com/bengraham-B/L3T16)
- Vercel: [https://l3-t16.vercel.app/auth/login](https://l3-t16.vercel.app/auth/login)
- Postman: [https://www.postman.com/dark-astronaut-547911/workspace/hyperiondev-level-3/collection/26299671-80d66138-73e3-45ba-9e3f-05a65bf3e88f](https://www.postman.com/dark-astronaut-547911/workspace/hyperiondev-level-3/collection/26299671-80d66138-73e3-45ba-9e3f-05a65bf3e88f)
- Draw.io Wireframe: [https://app.diagrams.net/#Hbengraham-B%2FL3T16%2Fmain%2FGOOSE_RELOADED%20Diagram.drawio](https://app.diagrams.net/#Hbengraham-B%2FL3T16%2Fmain%2FGOOSE_RELOADED%20Diagram.drawio)

Regarding the deployment of the app, I was told that it is no longer a requirement for the task.

---

## MongoDB

The database used is GOOSE_RELOADED.
