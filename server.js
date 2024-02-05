const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

const MONGO_URI = 'YOUR_DATABASE_URI/DATABASE_NAME';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const feedbackSchema = new mongoose.Schema({
  name: String,
  rate: Number,
  comment: String,
  latitude: Number,
  longitude: Number,
});

const Feedback = mongoose.model('Feedback', feedbackSchema, 'feedbackCollection');


app.get('/api/get-feedback', async (req, res) => {
  try {
    const allFeedback = await Feedback.find({}, { _id: 0, name: 1, rate: 1, comment: 1, latitude: 1, longitude: 1 });
    res.json(allFeedback);
  } catch (error) {
    console.error('Error fetching feedback:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
