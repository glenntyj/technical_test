const express = require('express');
const cors = require('cors');
const fileRoutes = require('./routes/fileRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/files', fileRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
