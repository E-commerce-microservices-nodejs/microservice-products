import app from "./app";

const port = process.env.PORT as string | 5001;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
