// import logo from "./logo.svg";
// import "./App.css";
import moment from "moment/moment";

var dates = [
	"Thu Sep 01 2016 00:00:00 GMT+0800 (CST)",
	"Fri Sep 02 2016 00:00:00 GMT+0800 (CST)",
	"Sat Sep 03 2016 00:00:00 GMT+0800 (CST)",
	"Sun Sep 04 2016 00:00:00 GMT+0800 (CST)",
	"Mon Sep 05 2016 00:00:00 GMT+0800 (CST)",
	"Tue Sep 06 2016 00:00:00 GMT+0800 (CST)",
	"Wed Sep 07 2016 00:00:00 GMT+0800 (CST)",
	"Thu Sep 08 2016 00:00:00 GMT+0800 (CST)",
	"Fri Sep 09 2016 00:00:00 GMT+0800 (CST)",
	"Sat Sep 10 2016 00:00:00 GMT+0800 (CST)",
	"Sun Sep 11 2016 00:00:00 GMT+0800 (CST)",
	"Mon Sep 12 2016 00:00:00 GMT+0800 (CST)",
	"Tue Sep 13 2016 00:00:00 GMT+0800 (CST)",
	" Wed Sep 14 2016 00:00:00 GMT+0800 (CST)",
	" Thu Sep 15 2016 00:00:00 GMT+0800 (CST)",
	"Fri Sep 16 2016 00:00:00 GMT+0800 (CST)",
	"Sat Sep 17 2016 00:00:00 GMT+0800 (CST)",
	"Sun Sep 18 2016 00:00:00 GMT+0800 (CST)",
	"Mon Sep 19 2016 00:00:00 GMT+0800 (CST)",
	" Tue Sep 20 2016 00:00:00 GMT+0800 (CST)",
	"Wed Sep 21 2016 00:00:00 GMT+0800 (CST)",
	"Thu Sep 22 2016 00:00:00 GMT+0800 (CST)",
	"Fri Sep 23 2016 00:00:00 GMT+0800 (CST)",
	"Sat Sep 24 2016 00:00:00 GMT+0800 (CST)",
	"Sun Sep 25 2016 00:00:00 GMT+0800 (CST)",
	"Mon Sep 26 2016 00:00:00 GMT+0800 (CST)",
	"Tue Sep 27 2016 00:00:00 GMT+0800 (CST)",
	"Wed Sep 28 2016 00:00:00 GMT+0800 (CST)",
	"Thu Sep 29 2016 00:00:00 GMT+0800 (CST)",
	"Fri Sep 30 2016 00:00:00 GMT+0800 (CST)",
];

function App() {
	return (
		<div className="container">
			{dates.map(function (day) {
				return (
					<div className="calendarDay">
						{moment(day).format("D").toString()}
					</div>
				);
			})}
		</div>
	);
}

export default App;
