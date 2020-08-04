import { useState, useEffect } from "react";
import React from "react";
import { Task, TaskForm } from "./task";
import { ADD, TaskReducer, InitialStateTask, DECREMENT, INCREMENT, CountReducer, COMPLETED, REMOVE } from "./taskReducer";

const Tasks = () => {
    const initialCounterState = {
        count:
            window.localStorage.getItem("count") == null
                ? 0
                : Number(window.localStorage.getItem("count")),
    };
    const initialTasksState = {
        tasks:
            window.localStorage.getItem("tasks") == null
                ? []
                : window.localStorage.getItem("tasks"),
    };
	const [todos, setTasks] = useState(InitialStateTask as any);
    
    const [state, dispatch] = React.useReducer(TaskReducer, initialTasksState as any);

	const addTask = (text: any) => {
		const newTasks = [...todos, { text }];
        setTasks(newTasks);
        dispatch({ type: ADD, payload: newTasks })
        window.localStorage.setItem("tasks", JSON.stringify(newTasks));
	};

	const completeTask = (index: any) => {
		const newTasks = [...todos];
		newTasks[index].isCompleted = true;
        setTasks(newTasks);
        dispatch({ type: COMPLETED, payload: newTasks })
	};

	const removeTask = (index: any) => {
		const newTasks = [...todos];
		newTasks.splice(index, 1);
        setTasks(newTasks);
        dispatch({ type: REMOVE, payload: newTasks })
    };
    

	const [counterState, dispatchCounter] = React.useReducer(CountReducer, {
		count: initialCounterState.count,
	});

	useEffect(() => {
		window.localStorage.setItem("count", counterState.count);
	}, [counterState.count]);


    // useEffect(() => {

	// 	window.localStorage.setItem("tasks", JSON.stringify(initialTasksState.tasks));
	// }, [initialTasksState.tasks]);
	
	useEffect(() => {
		console.dir("HI ", state)
	})
    

	return (
		<div className="app">
			<div className="todo-list">
				{/* {state.tasks && todos.map((todo: any, index: number) => ( }
					// <Task
					// 	key={index}
					// 	index={index}
					// 	todo={todo}
					// 	completeTask={completeTask}
					// 	removeTask={removeTask}
					// />
					// console.log("todo: ", state.tasks)
				// )) */}
				{/* {console.log(JSON.parse(state.tasks))} */}
				{JSON.parse(state.tasks).map((todo: any, index: any) => (
						<Task
						key={index}
						index={index}
						todo={todo}
						completeTask={completeTask}
						removeTask={removeTask}
					/>)
				)}
				<TaskForm addTask={addTask} />
				Count: {counterState.count}
				<button onClick={() => dispatchCounter({ type: DECREMENT })}>
					Decrement
				</button>
				<button onClick={() => dispatchCounter({ type: INCREMENT })}>
					Increment
				</button>
			</div>
		</div>
	);
};

export default Tasks;
