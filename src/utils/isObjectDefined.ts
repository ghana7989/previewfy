export const isObjectDefined = (obj: any) => {
	if (!Object.keys(obj).length) return false;
	return obj !== undefined && obj !== null;
};
