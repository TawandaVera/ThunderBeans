<p align="center">
  <img src="docs/challenge-banner.jpg" alt="CHALLENGE Program Banner" style="max-width: 100%;">
</p>

# 🏛️ ThunderBeans GPT + Email Report Automation

This project powers an AI-driven, simulation-based policy negotiation game — the **ThunderBeans GPT Parliamentary Policy Simulator** — and integrates it with a custom Node.js + SendGrid email API that automatically delivers evaluation reports to stakeholders.

---

## 🎮 Simulation Purpose

The simulation allows a user to play as a Member of Parliament in the fictional Republic of Bean, engaging in a structured 3-phase process:

1. **Individual Decision-Making** – Create a 14-unit refugee education policy package.
2. **Group Debate** – Negotiate and vote with 4 AI-generated MPs.
3. **Parliamentary Debrief** – Reflect on motivations, trade-offs, and justice.

It focuses on inclusion, budget trade-offs, and social justice — grounded in critical pedagogy and designed as a learning tool for education and policy research.

---
📂 **Integration for Facilitator Script or System Module**
“This simulation defaults to immersive mode. You may say at any time:
‘Speaker, step out of character’ to ask for system-level insight,
or _‘Speaker, resume full roleplay’ to re-enter immersive parliamentary dialogue.”

🧭 Embedded Toggle Logic (For Facilitators/Engineers)
Before launching any phase of the simulation, confirm simulation mode:
If facilitator or user says:
  → “Speaker, resume full roleplay”
      → Disable developer-facing outputs
      → Enable immersive, in-character Speaker responses only
      → Continue simulation in user-centric narrative mode
If facilitator or user says:
  → “Speaker, step out of character”
      → Pause immersive simulation
      → Enable technical explanations and internal simulation logic
      → Respond using system-facing documentation and debug-level clarity

🎮 Voice/GUI Interface Integration (Optional):
Command	Action Taken by System	Notes
Speaker, resume full roleplay	Switch to immersive mode	Default state for users
Speaker, step out of character	Switch to developer/debug mode	For testers, developers, facilitators
What mode am I in?	Respond with current simulation mode status	Optional helper command


## ⚙️ Technical Features

- **ChatGPT Action**: Integrates the simulation into ChatGPT as a tool.
- **Node.js Email API**: Sends post-simulation reports via SendGrid.
- **Replit Hosting**: Deployed with autoscaling & public API endpoint.
- **OpenAPI Schema**: Supports structured interaction inside ChatGPT.

---

## 📬 Email API Overview

Built using Node.js + Express + @sendgrid/mail:

### Endpoint:
```http
POST /send-email
```

### Request Body:
```json
{
  "recipientEmail": "tcvera@asu.edu",
  "reportContent": "Simulation summary + reflection",
  "subject": "Evaluation Report"
}
```

### Response:
- `200 OK` → "Email sent successfully"
- `400 Bad Request` → "Missing required fields"
- `500 Server Error` → "Failed to send email"

---

## 🛠️ How to Run Locally

```bash
git clone https://github.com/TawandaVera/ThunderBeans.git
cd ThunderBeans
npm install
cp .env.sample .env  # Add your SENDGRID_API_KEY
npm start
```

Test it:
```bash
curl -X POST http://localhost:3000/send-email   -H "Content-Type: application/json"   -d '{"recipientEmail":"you@example.com", "reportContent":"Test content"}'
```

---

## 🧠 Simulation Knowledge Base

This GPT's simulation logic is grounded in the following documents:

- 🏛️ Republic of Bean scenario (socio-political context, refugee crisis)
- 🎓 7 Education Policy Areas × 3 Options Each (see PDF/markdown in `/docs`)
- 💰 Strict 14-unit Budget System
- 🧠 MP Simulation Logic (Hidden profiles, adaptive debate)
- 📄 Evaluation Report Guidelines (auto-emailed post-simulation)
- 💬 Debrief Reflection Prompts (justice, inclusion, power)

> Full source docs in [`/docs/`](./docs)

---

## 📂 Repo Structure

```
/ThunderBeans
  |-- index.js              # Email API Server
  |-- package.json
  |-- .env.sample
  |-- README.md
  |-- openapi.json          # For ChatGPT Action Integration
  |-- /docs                 # Simulation logic + policy files
```

---

## ✨ Future Additions

- 🎤 Voice input/output for MPs
- 🔁 Persistent database for multiple session tracking
- 🔒 Auth protection for the email API
- 📊 Data visualization of policy trends

---

## 👥 Maintainers & Submission

- Created for the AI CHALLENGE Hackathon
- Report emails go to: `aturan@asu.edu`, `JANEL.WHITE@asu.edu`

--- 

## 📘 License

MIT — free for ethical educational use. Credit required for remix/reuse.
