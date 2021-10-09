import React from 'react'
import TodoList from './components/TodoList'
import UserList from './components/UserList'

const App3 = () => {
    return (
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem'}}>
            <TodoList/>
            <UserList/>
        </div>
    )
}

export default App3
