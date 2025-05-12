export default function Filters({ todos, acTodos, activeTodos, setFilter, completedTodos, coTodos, coFilter, allTodos, darkLight }) {

    const h5Class = "font-[700] text-[1.4rem] leading-[100%] tracking-[-0.19px] cursor-pointer text-[#5B5E7E] hover:font-[700]! hover:text-[#ffffff]! max-md:text-[1rem]"

    return (
        todos.length > 0 ? <div className="w-[100%] h-[50px] bg-[#25273D] rounded-[0_0_5px_5px] flex items-center justify-between p-[16px]!" style={darkLight ? {backgroundColor: "#ffffff"} : null}>
            <h5 className={h5Class}>{activeTodos ? acTodos.length : completedTodos ? coTodos.length : todos.length} items left</h5>
            <div className='flex gap-[20px]'>
                <h5 className={h5Class} style={allTodos ? { color: "#3A7CFD", fontWeight: "700" } : { color: "#5B5E7E", fontWeight: "400" }} onClick={() => setFilter(true, false, false)}>All</h5>
                <h5 className={h5Class} style={activeTodos ? { color: "#3A7CFD", fontWeight: "700" } : { color: "#5B5E7E", fontWeight: "400" }} onClick={() => setFilter(false, true, false)}>
                    Active</h5>
                <h5 className={h5Class} style={completedTodos ? { color: "#3A7CFD", fontWeight: "700" } : { color: "#5B5E7E", fontWeight: "400" }} onClick={() => setFilter(false, false, true)}>Completed</h5>
            </div>
            <h5 className={h5Class} onClick={() => {
                coFilter()
            }}>Clear Completed</h5>
        </div> : null
    )
}