import app from "./app.js";
import connectdb from "./config/db.js";

connectdb();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
  
