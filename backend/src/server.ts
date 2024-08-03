import app from './app';

const PORT = process.env.PORT || 5000;

// Start the server to listen on PORT.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
