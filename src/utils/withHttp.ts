export const withHttp = (url: string) =>
	!/^https?:\/\//i.test(url) ? `http://${url}` : url;
