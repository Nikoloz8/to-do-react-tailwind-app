import { useState } from 'react'
import './App.css'
import Todo from "./components/Todo"
import Input from "./components/Input"
import Filters from "./components/Filters"
import Text from "./components/Text"

function App() {

  let [done, setDone] = useState([])
  let [todos, setTodos] = useState([])
  let [input, setInput] = useState([])
  let [activeTodos, setActiveTodos] = useState(false)
  let [allTodos, setAllTodos] = useState(true)
  let [completedTodos, setCompletedTodos] = useState(false)
  let [darkLight, setDarkLight] = useState(false)


  function setFilter(a, b, c) {
    setAllTodos(a),
      setActiveTodos(b),
      setCompletedTodos(c)
  }

  function handleClick() {
    if (input.trim() === "") return;

    setTodos([...todos, [input, Math.random()]])
    setInput("")
  }

  const acTodos = todos.filter((i) => !done.includes(i[1]))

  const coTodos = todos.filter((i) => done.includes(i[1]))

  const coFilter = () => {
    setTodos(todos.filter((i) => !done.includes(i[1])))
    setDone(done.filter((i) => !done.includes(i)))
  }


  return (
    <>

      <div className="body flex justify-center bg-[#171823] min-h-[100vh] pt-[50px]! bg-[url('/images/bg-desktop-dark.jpg')] bg-no-repeat bg-[length:100%_auto] max-xl:bg-[url('/images/bg-mobile-dark.jpg')]" style={darkLight ? { backgroundColor: "#FAFAFA", backgroundImage: "url('/images/bg-desktop-light.jpg')" } : null}>
        <div className='w-[540px] max-md:w-[100%] pl-[32px]! pr-[32px]! flex flex-col gap-[20px]'>
          <Text setDarkLight={setDarkLight} darkLight={darkLight} />
          <Input handleClick={handleClick} input={input} setInput={setInput} darkLight={darkLight} />
          <div>
            <Todo darkLight={darkLight} todos={todos} setDone={setDone} done={done} setTodos={setTodos} activeTodos={activeTodos} allTodos={allTodos} completedTodos={completedTodos} acTodos={acTodos} coTodos={coTodos} />
            <Filters darkLight={darkLight} todos={todos} acTodos={acTodos} activeTodos={activeTodos} setFilter={setFilter} completedTodos={completedTodos} coTodos={coTodos} coFilter={coFilter} allTodos={allTodos} />
          </div>
        </div >
      </div >
    </>
  )
}

export default App
