export default function Todo({ todos, setDone, done, setTodos, activeTodos, completedTodos, acTodos, coTodos, darkLight }) {

    function handleDelete(ind) {
        setTodos(todos.filter((i) => i[1] !== ind))
        setDone(done.filter(e => e[1] !== ind))
    }


    const handleCheck = (ind) => {
        !done.includes(ind) ? setDone([...done, ind]) : setDone(done.filter(i => i !== ind))
    }



    function mapper(m) {
        return m.map(
            (e) => {
                return <div style={{
                    ...(darkLight ? { backgroundColor: "#FFFFFF", borderBottom: "1px solid #E3E4F1"} : {}),
                    ...(e[1] === 0 ? { borderRadius: "5px 5px 0 0" } : {}),
                }} className="hoveredcheck bg-[#25273D] w-[100%] h-[64px] p-[16px]! items-center flex justify-between border-solid border-[#393A4B] border-b-[1px]" key={e[1]} >
                    <div className="flex items-center gap-[20px]">
                        <input type="checkbox" id={`check${e[1]}`} className="hidden" />
                        <div style={done.includes(e[1]) ? { background: "url(/images/icon-check.svg), linear-gradient(120deg, #55DDFF, #C058F3)", backgroundRepeat: "no-repeat", backgroundPosition: "center" } : undefined} className="check-div-not-active w-[25px] h-[25px] rounded-full border-solid hoveredCheck flex items-center justify-center">
                            <label onClick={() => handleCheck(e[1])} style={!done.includes(e[1]) && !darkLight ? { backgroundColor: "#25273D" } : !done.includes(e[1]) && darkLight ? { backgroundColor: "#FFFFFF" } : null} htmlFor={`check${e[1]}`} className="cursor-pointer w-[24px]! h-[24px]! border-solid border-[1px] border-[#393A4B] rounded-full inline-block z-100"></label>
                        </div>
                        <label htmlFor={`check${e[1]}`} className="cursor-pointer text-[1.8rem] text-[#C8CBE7] font-[400] tracking-[-0.25px] leading-[100%]" onClick={() => handleCheck(e[1])} style={{
                            textDecorationLine: done.includes(e[1]) ? "line-through" : "none",
                            color: darkLight ? "#494C6B" : undefined
                        }}>{e[0]}</label>
                    </div>
                    <img src="/images/icon-cross.svg" className="cursor-pointer" onClick={() => handleDelete(e[1])} alt="" />
                </div >
            }
        )
    }


    return activeTodos ? mapper(acTodos) : completedTodos ? mapper(coTodos) : mapper(todos)



}
