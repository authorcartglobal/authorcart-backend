const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Working 🚀");
});

app.post("/order", async (req, res) => {
  try {
    const db = require("./firebaseAdmin");

    const docRef = await db.collection("orders").add({
      cart: req.body.cart,
      reference: req.body.reference,
      createdAt: new Date()
    });

    res.json({
      success: true,
      id: docRef.id
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Running on " + PORT);
});
