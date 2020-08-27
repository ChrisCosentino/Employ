const express = require("express");
const app = express();

app.use(express.json({ extended: false }));

app.get("/api", (req, res) => res.send("api running"));

app.use("/api/jobs", require("./routes/jobs"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
