import express from "express";
import process from "process";

// Imports need the .js extension for now, a potential fix could be https://stackoverflow.com/questions/47210834/typescript-module-resolution-not-working
import { searchService } from "./src/Services/Google/Search/SearchService.js";


const app = express();
const port = process.env.PORT || 8080;

app.get("/", function(req, res) {
	res.sendFile(process.cwd() + "/build/index.html");
});

app.listen(port);
console.log('Server started at http://localhost:' + port);

