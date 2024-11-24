const express = require('express');
const configureBodyParser = require('./src/middlewares/bodyParserMiddleware');
const configureCORS = require('./src/middlewares/corsMiddleware');
const configureLogging = require('./src/middlewares/loggingMiddleware');
const routes = require('./src/routes/index');

const app = express();
const PORT = process.env.PORT || 5000;

// Apply Middlewares
configureBodyParser(app);
configureCORS(app);
configureLogging(app);

// Routes
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
