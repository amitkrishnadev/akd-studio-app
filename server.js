const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

// simple middleware
app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`);
	next();
});

function auth(req, res, next) {
	const token = req.headers["x-auth-token"];

	if (!token) return res.status(401).json({ message: "Unauthorized" });

	next();
}

// Public (login app)
app.use("/app/login", express.static(path.join(__dirname, "builds/login-app")));

// Protected apps (after authentication)
app.use("/app/studio", auth, express.static(path.join(__dirname, "builds/akd-studio")));
app.use("/app/chat", auth, express.static(path.join(__dirname, "builds/chat-app")));
app.use("/app/console", auth, express.static(path.join(__dirname, "builds/console-app")));

app.listen(3000, () => {
	console.log("AKD Studio Gateway running on port 3000");
});
