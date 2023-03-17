import React, { Component, useEffect, useState } from "react";
import moment, { weekdays } from "moment";
import createCal from "./Create";
import "./calendar.css";
import { FcNext, FcPrevious } from "react-icons/fc";

function Calendar() {
	const [cal, setCal] = useState([]);
	const [date, setDate] = useState(moment());

	useEffect(() => {
		setCal(createCal(date));
		console.log(date.month());
	}, [date]);

	function handleNext() {
		return date.clone().add(1, "month");
	}
	function handlePrev() {
		return date.clone().subtract(1, "month");
	}

	function isToday(day) {
		return day.isSame(new Date(), "day");
	}
	function beforeDays(day) {
		return date.isAfter(day, "month");
	}
	function afterDays(day) {
		return date.isBefore(day, "month");
	}
	function selectedDay(day) {
		return date.isSame(day, "day");
	}

	function customStyle(day) {
		if (isToday(day)) {
			return "today";
		}
		if (afterDays(day)) {
			return "before";
		}
		if (beforeDays(day)) {
			return "before";
		}
		if (selectedDay(day)) {
			return "selected";
		}
		return "";
	}

	const weekdays = moment.weekdaysShort();
	return (
		<div className="container">
			<h1 className="cal-header">
				<button className="prev" onClick={() => setDate(handlePrev())}>
					{<FcPrevious />}
				</button>
				<div className="date">{date.format("MMMM, YYYY")}</div>
				<button className=" next" onClick={() => setDate(handleNext())}>
					{<FcNext />}
				</button>
			</h1>

			<div className="week">
				{weekdays.map((wday) => (
					<div className="week-days">{wday}</div>
				))}
			</div>
			<div className="calendar ">
				{cal.map((week) => (
					<div>
						{week.map((day) => (
							<div
								className="cal-day"
								onClick={() => {
									setDate(day);
								}}
							>
								<div className={customStyle(day)}>
									{day.format("DD")}
								</div>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}

export default Calendar;
