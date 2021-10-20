import express, {json} from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import router from './routes/routes';
import cors from 'cors';

// Load env file
dotenv.config();

// Initialization
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(json());
app.use(cors({
  origin: '*'
}));

app.use(express.static(__dirname + '/public'));


app.get('/report', (req, res) => {
  res.sendFile(__dirname + '/public/report.html');
});

// Define Routes
app.use('/api', router);

export default app;