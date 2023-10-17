import express from "express"
import cors from "cors"
import route from './routes/api.js';

const corsOptions = {
  methods: ["POST", "GET", "PUT"],
  credentials: true,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

app.use('/', route)

app.listen(8080, () => {
  console.log('Server running on port 8080');
});