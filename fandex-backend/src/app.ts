import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import marketRoutes from './routes/marketRoutes';
import portfolioRoutes from './routes/portfolioRoutes';
import userRoutes from './routes/userRoutes';
import { sequelize } from './utils/db';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/markets', marketRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/users', userRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
