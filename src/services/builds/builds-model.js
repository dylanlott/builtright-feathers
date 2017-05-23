'use strict';

// builds-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buildsSchema = new Schema({
  name: { type: String, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true},
  year: { type: Number, required: true },
  trim: { type: String },
  description: { type: String },
  parts: [{type: Schema.Types.ObjectId, ref: 'parts'}],
  comments: [{type: Schema.Types.ObjectId, ref: 'comments'}],
  user: { type: String, required: true },
  hidden: { type: Boolean },
  flagged: { type: Boolean },
  published: { type: Boolean },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const buildsModel = mongoose.model('builds', buildsSchema);

module.exports = buildsModel;
