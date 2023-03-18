import React, { useState, useEffect } from "react";
import { GrAddCircle } from "react-icons/gr";
import Todo from "./Todo";
import { auth, db } from "../firebase";
import {
	query,
	collection,
	onSnapshot,
	updateDoc,
	doc,
	addDoc,
	deleteDoc,
	getDoc,
} from "firebase/firestore";
import { set, ref } from "firebase/database";
// import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "./events.css";

function Event() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState("");
	const [date, setDate] = useState(new Date());

	// Create todo
	const createTodo = async (e) => {
		e.preventDefault(e);

		if (input === "") {
			alert("Please enter a valid Event");
			return;
		}
		const finalDate = moment(date).format("DD/MM/YYYY");
		await addDoc(collection(db, `todos`), {
			text: input,
			completed: false,
			time: finalDate,
			uid: auth.currentUser.uid,
		});
		setInput("");
	};

	// Read todo from firebase
	useEffect(() => {
		const q = query(collection(db, "todos"));
		const docSnap = onSnapshot(q, (querySnapshot) => {
			let todosArr = [];
			querySnapshot.forEach((doc) => {
				if (doc.data().uid === auth.currentUser.uid) {
					// console.log(doc.data().uid);
					todosArr.push({ ...doc.data(), id: doc.id });
				}
			});

			setTodos(todosArr);
		});
		return () => docSnap();
	}, []);

	// Update todo in firebase
	const toggleComplete = async (todo) => {
		await updateDoc(doc(db, "todos", todo.id), {
			completed: !todo.completed,
		});
	};

	// Delete todo
	const deleteTodo = async (id) => {
		await deleteDoc(doc(db, "todos", id));
	};

	return (
		<div className="all-events">
			<div className="add-event">
				<h3>Add Events</h3>
				<div>
					<form className="inputs-flex" onSubmit={createTodo}>
						<div className="inputs">
							<input
								value={input}
								onChange={(e) => setInput(e.target.value)}
								type="text"
								placeholder="Add Event"
								className="form-input"
							/>
							<DatePicker
								label="Basic example"
								format="DD/MM/YYYY"
								value={date}
								selected={date}
								onChange={(newValue) => setDate(newValue)}
							/>
						</div>
						<button className="add-btn">
							<GrAddCircle size={50} />
						</button>
					</form>
				</div>
			</div>

			<div className="display-event">
				<h1>Events: </h1>
				<ul>
					{todos.map((todo, index) => (
						<Todo
							key={index}
							todo={todo}
							toggleComplete={toggleComplete}
							deleteTodo={deleteTodo}
						/>
					))}
				</ul>
				{todos.length == 0 ? null : (
					<p>{`You have ${todos.length} Events`}</p>
				)}
			</div>
		</div>
	);
}

export default Event;
