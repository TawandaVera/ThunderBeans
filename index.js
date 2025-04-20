const express = require("express");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");

require("dotenv").config();

const app = express();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { recipientEmail, subject, reportContent } = req.body;

  if (!recipientEmail || !reportContent) {
    return res.status(400).send("Missing required fields");
  }

  const msg = {
    to: recipientEmail,
    from: "tcvera@asu.edu",
    subject: subject || "Evaluation Report",
    text: reportContent,
  };

  try {
    await sgMail.send(msg);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("SendGrid error:", error.response?.body || error.message);
    res.status(500).send("Failed to send email");
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
