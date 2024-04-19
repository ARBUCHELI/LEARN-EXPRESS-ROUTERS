const express = require('express');
const { seedElements } = require('./utils');

const expressionsRouter = express.Router();

// Get all expressions
expressionsRouter.get('/', (req, res, next) => {
  res.send(expressions);
});

const expressions = [];
seedElements(expressions, 'expressions');

module.exports = expressionsRouter;
