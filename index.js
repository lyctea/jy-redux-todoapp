import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

/*store 数据结构*/
var sample = {
    visibilityFilter: 'SHOW_ALL',
    todos: [{
        text: 'consider using Redux',
        completed: true
    },{
        text: 'Keep all state a single tree',
        completed: false
    }]
}

let store = createStore(todoApp);
//App 下面的所有组件可以利用 context 获取传入到 Provider 中的 store
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));