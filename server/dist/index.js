"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_config_1 = __importDefault(require("./lib/db.config")); // Ensure `db.config.ts` exports `ConnectDB`
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes")); // Ensure `UserRoutes` exports `Router`
const SubscriberRoutes_1 = __importDefault(require("./routes/SubscriberRoutes")); // Ensure `SubscriberRoutes` exports `Router`
// Load environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
/** User Routes */
app.use("/api/v1/user", UserRoutes_1.default);
app.use("/api/v1/launch", SubscriberRoutes_1.default);
// Serve an HTML file for the root route
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "templates", "serverTemplate.html"));
});
// Catch-all route for undefined routes
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});
// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
});
// Connect to the database
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
    console.error("MONGO_URI is not defined in environment variables");
    process.exit(1); // Exit if no connection string is provided
}
(0, db_config_1.default)(mongoURI)
    .then(() => {
    console.log("Database connected successfully!");
})
    .catch((error) => {
    console.error("Database connection failed:", error);
});
// Export the app for Vercel or other platforms
exports.default = app;
