export const dateToStr = date => {
	let mm = date.getMonth() + 1;
	let dd = date.getDate();

	return [
		(dd > 9 ? '' : '0') + dd,
		(mm > 9 ? '' : '0') + mm,
		date.getFullYear(),
	].join('/');
};

export default dateToStr;
