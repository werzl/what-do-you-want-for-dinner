export type SearchService = {
	Search: (query: string, page?: number ) => SearchResults | undefined;
}

export type SearchResults = {
	url: any,
	queries: any,
	request: any,
	nextPage: {
		title: string,
		totalResults: string,
		count: number,
		startIndex: number,
		startPage: number
	},
	promotions: any,
	context: any,
	searchInformation: {
		searchTime: number,
		totalResults: string,
		formattedTotalResults: string
	},
	spelling: {
		correctedQuery: string,
		htmlCorrectedQuery: string
	},
	items: Result[]
};

type Result = {
	title: string,
	htmlTitle: string,
	link: string,
	displayLink: string,
	snippet: string,
	htmlSnippet: string,
	formattedUrl: string,
	labels: [
		{
			name: string,
			displayName: string
		}
	]
};