

const initState = []
function Reducer(state = initState, action) {
    switch (action.type) {

        case "ADD_TO_CART":
            return [...state, action.payload]
        case "DELETE":
            return state.filter(item => item.id !== action.payload);
        case "PLUS":
            return state.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item;
            })
        case "MINUS":
            return state.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                }
                return item;
            })

        default:
            return state
    }
}

export default Reducer;