const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
app.use(bodyParser.json());

let receivedAlert = null;

app.post("/webhook", (req, res) => {
  receivedAlert = req.body;

  console.log("Received Alert:", JSON.stringify(req.body, null, 2));

  res.status(200).json({
    message: "Webhook received successfully!",
    alertData: req.body,
  });
});

// API GET để lấy dữ liệu cảnh báo từ trình duyệt
app.get("/webhook", (req, res) => {
  if (receivedAlert) {
    res.status(200).json(receivedAlert);
  } else {
    res.status(404).json({ message: "No alert received yet." });
  }
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Webhook server is running on http://localhost:${PORT}`);
});
