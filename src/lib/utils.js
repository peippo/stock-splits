const quarterNames = ['q1', 'q2', 'q3', 'q4'];
export const quarterMonths = {
	q1: ['01', '02', '03'],
	q2: ['04', '05', '06'],
	q3: ['07', '08', '09'],
	q4: ['10', '11', '12']
};
export const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];
const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const splitDataToQuarters = (data, year) =>
	quarterNames.map((q) => {
		const firstMonth = quarterMonths[q][0];
		const [lastMonth] = quarterMonths[q].slice(-1);
		const name = q;

		const content = data.filter(
			(split) =>
				split.execution_date >= `${year}-${firstMonth}-01` &&
				split.execution_date <= `${year}-${lastMonth}-31`
		);

		return { name, content };
	});

export const splitDataToMonths = (data, year, quarter) =>
	quarterMonths[quarter]?.map((m) => {
		const number = parseInt(m);
		const name = monthNames[number - 1];
		const content = data.filter(
			(split) =>
				split.execution_date >= `${year}-${m}-01` && split.execution_date <= `${year}-${m}-31`
		);

		return { number, name, content };
	});

export const splitDataToDays = (data, month) => {
	const days = monthLengths[month - 1];
	const daysArray = [];

	for (let i = 0; i < days; i++) {
		daysArray.push([]);
	}

	data.forEach((split) => {
		const dayIndex = new Date(split.execution_date).getDate() - 1;
		daysArray[dayIndex]?.push(split);
	});

	return daysArray;
};

export const usdFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	maximumFractionDigits: 0
});
