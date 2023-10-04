import { SearchResults, SearchService } from "./index";

export const searchService: SearchService = {
	Search: function(query: string, page?: number): SearchResults | undefined {
		console.info(`Search called with query: '${query}'.`);

		console.warn("TODO");

		return undefined;
	}
}