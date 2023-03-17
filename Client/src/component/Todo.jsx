import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import "./todo.css";

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
	return (
		<li className={`event-item ${todo.completed && "strike"}`}>
			<input
				onChange={() => toggleComplete(todo)}
				type="checkbox"
				checked={todo.completed ? "checked" : ""}
				className="checkbox"
			/>
			<p className="event-name" onClick={() => toggleComplete(todo)}>
				{todo.text}
			</p>
			<p className="event-date" onClick={() => toggleComplete(todo)}>
				{todo.time}
			</p>

			<button className="trash" onClick={() => deleteTodo(todo.id)}>
				{<FaRegTrashAlt />}
			</button>
		</li>
	);
};

export default Todo;
