const multer = require('multer');
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

const upload = multer({ dest: 'uploads/' });

const uploadFile = (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send('No file uploaded.');
  }

  const results = [];
  fs.createReadStream(path.join(__dirname, '../../uploads', file.filename))
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      fs.unlinkSync(path.join(__dirname, '../../uploads', file.filename)); // Clean up
      res.json(results);
    });
};

module.exports = {
  upload,
  uploadFile,
};
