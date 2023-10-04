// Imports need the .js extension for now, a potential fix could be https://stackoverflow.com/questions/47210834/typescript-module-resolution-not-working
import { searchService } from "./src/Services/Google/Search/SearchService.js";

searchService.Search("test");
