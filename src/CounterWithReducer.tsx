import { useReducer } from "react"

const initialState = 0;

const reducer = (state, action) => {
	switch(action) {
		case "decrement":
			return state - 1;
		case "increment":
			return state + 1
		case "reset":
			return initialState
		default:
			return state
	}
}

export const CounterWithReduer = () => {
	const [count, dispatch] = useReducer(reducer, initialState)
	return (
		<div>
			<p>Count: { count }</p>
			<button onClick={() => dispatch('decrement')}>Decrement</button>
			<button onClick={() => dispatch('increment')}>Increment</button>
			<button onClick={() => dispatch('reset')}>Reset</button>
		</div>
	)
}