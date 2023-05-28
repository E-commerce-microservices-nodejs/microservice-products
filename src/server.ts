import app from "./app";

const port = process.env.PORT as string | 5000;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

app.get('/health',(req, res) => {
  res.send('server is running .');
});

app.get('/ready',(req, res) => {
  res.send('server is ready .');
});
