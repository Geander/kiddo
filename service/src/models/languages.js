const mongoose = require('mongoose');

const LanguagesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    wikipedia_url: {
      type: String,
      required: true,
    },
  },
  { minimize: false }
);

const Languages = mongoose.model('Languages', LanguagesSchema);
Object.freeze(Languages);
module.exports = Languages;
