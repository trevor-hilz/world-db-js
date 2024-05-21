import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import 'dotenv/config';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'client/public')));

// app.get('/', (req, res) => {
//     return res.sendFile(path.resolve(__dirname, 'client/public/index.html'))
// });

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

export default app;