import moment from "moment";
function createCal(date) {
	// getting days according to calendar of a month

	const firstDate = date.clone().startOf("month").startOf("week");
	const lastDate = date.clone().endOf("month").endOf("week");

	const calDay = firstDate.clone().subtract(1, "day");
	const cal = [];

	while (calDay.isBefore(lastDate, "day")) {
		cal.push(
			Array(7)
				.fill(-1)
				.map(() => calDay.add(1, "day").clone())
		);
	}

	return cal;
}

export default createCal;
