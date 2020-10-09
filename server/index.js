require('dotenv').config();
            const express = require('express');
            const  massive = require('massive');
             const ctrl = require('./controller');
             const { SERVER_PORT, CONNECTION_STRING } = process.env;
            const app = express();
//   session = require('express-session'),
    //   SESSION_SECRET add to proces..env

app.use(express.json());

// app.use(session({
//     resave: false,
//     saveUninitialized: true,
//     secret: SESSION_SECRET,
//     cookie: {maxAge: 1000 * 60 * 60 * 24 * 365}
// }));


massive({
    connectionString: CONNECTION_STRING,
    ssl: {
      rejectUnauthorized: false,
    },
  }).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('DB Ready')
    
  })
  app.listen(SERVER_PORT, () => console.log(`I am alive!!!! ${SERVER_PORT}`))
//ctrl endpoints



