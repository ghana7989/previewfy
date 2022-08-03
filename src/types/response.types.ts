export interface IProxyResponse {
	meta: {
		title: string;
		url: string;
		description: string;
	};
	og: {
		site_name?: string;
		url?: string;
		image?: string;
		title?: string;
		description?: string;
		type?: string;
	};
	images: {
		src: string;
	}[];
}
