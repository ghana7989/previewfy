export const truncate = (str: string, maxLength: number = 75) => {
	if (str.length > maxLength) {
		return str.substring(0, maxLength) + '...';
	}
	return str;
};
