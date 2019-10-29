import * as express from 'express'
import * as cors from 'cors'
import DB from './DB'
import { eventsRouter } from './routes/events'

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

//Connect to DB
DB.start()


//Configure Router
app.use('/events', eventsRouter);
// app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
