export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const COMPLETED = "COMPLETED";

// initial state
export const InitialStateTask = [{
	text: '',
	isCompleted: false,
}]

export function CountReducer(state: any, action: any) {
	switch (action.type) {
		case INCREMENT:
			return { count: state.count + 1 };
		case DECREMENT:
			return { count: state.count - 1 };
		default:
			throw new Error();
	}
}

export function TaskReducer(state: any, action: any) {
	switch (action.type) {
		case ADD:
			if (!action.payload) {
				return state;
			  }
			  // return current state if duplicate
			  if (state.tasks.includes(action.payload)) {
				return state;
			  }
			  return {
				...state,
				tasks: [...state.tasks, action.payload]
			  };
		case REMOVE:
			return [ ...state, action.payload ];
		case COMPLETED:
			return [ ...state, action.payload ];
		default:
			throw new Error();
	}
}
