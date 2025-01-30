require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const contactRoutes = require("./routes/contacts.js");

app.use("/contacts", contactRoutes);

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./routes/swagger.json");


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

  const PORT = process.env.PORT || 3000;  // Default to 3000 if not set
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
});
