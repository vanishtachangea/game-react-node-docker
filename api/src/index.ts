// import './LoadEnv'; // Must be the first import
// import app from '@server';
// import logger from '@shared/Logger';

// // Start the server
// const port = Number(process.env.PORT || 3000);
// app.listen(port, () => {
//     logger.info('Express server started on port: ' + port);
// });
 
//import express from 'express';

//import './LoadEnv'; // Must be the first import
//import app from '@server';
//import logger from '@shared/Logger';

import express from 'express';

import bodyParser from 'body-parser';
import {AppRouter } from './AppRouter';
import './controllers/GameController';
import './controllers/RootController';
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(AppRouter.getInstance());
app.listen(3000, ()=>{
    console.log('***Listening on port 3000');
}) 
export default app;
