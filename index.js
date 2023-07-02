const app = require('./app');

// const PORT = 80; // CAMBIAR A 80
const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
