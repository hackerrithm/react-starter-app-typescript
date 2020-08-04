import React, { useState } from "react";
import { ButtonContext } from "../context/AppContext";

export const Task = ({ todo, index, completeTask, removeTask }: any) => {
	return (
		<div
			className="todo"
			style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
		>
			{todo.text}

			<div>
				<button onClick={() => completeTask(index)}>Complete</button>
				<button onClick={() => removeTask(index)}>x</button>
			</div>
		</div>
	);
}

const Button = (type: any) => {
	const color = React.useContext(ButtonContext);
	return <button type={type} style={{ color }}>button</button>;
}

export const TaskForm = ({ addTask }: any) => {
    const [value, setValue] = useState("");
    

	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (!value) return;
        addTask(value);
		setValue("");
	};

	return (
		<ButtonContext.Provider value={"blue"}>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					className="input"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<Button type="submit" />
			</form>
		</ButtonContext.Provider>
	);
}
