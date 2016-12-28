const todo = (state, action) => {
    switch (action.type){
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                complete: false
            }
        case 'TOGGLE_TODO':
            if (state.id != action.id){
                return state
            }
            //使用 Object.assign 方法保证每次都是返回新的对象
            return Object.assign({}, state,{
                completed: !state.completed
            })
        default:
            return state
    }
}
const todos = (state = [], action) => {
    switch (action.type){
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ]
        case 'TOGGLE_TODO':
            return state.map(t => tod(t, action))
        default:
            return state
    }
}

export default todos