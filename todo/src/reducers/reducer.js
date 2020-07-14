export const initialState =[ {
    item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}]

export const reducer = (state, action) => {
switch (action.type) {
    case "ADD_TODO":
        return [
            ...state,
            {
                item:action.payload,
                completed:false,
                id: Date.now(),
            },
        ]
            case "TOGGLE_TODO":
            state.map(todo => {
                if(todo.id ===action.payload) {
                    return [
                        ...state,
                        {
                        completed: !todo.completed
                        },
                    ]
                } else {
                    return state;
                }
            })
        

     
        default:
      return state;
    }
}