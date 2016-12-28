import { combineReducers } from 'redux'
import  todos from './todos'
import visibilityFilter from './visibilityFilter'
/*redux.combineReducers 方法将其他 reducer 结合起来，
每个数据 key 都需要实现一个对应的 reducer*/
const todoApp = combineReducers({
    todos,
    visibilityFilter
})

export default todoApp