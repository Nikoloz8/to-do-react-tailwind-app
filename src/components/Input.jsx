export default function Input({ handleClick, input, setInput, darkLight }) {
    return (
        <>
            <div className='bg-[#25273D] mt-[30px]! rounded-[5px] w-[100%] h-[64px] p-[16px]! flex items-center justify-start gap-[20px]' style={{ backgroundColor: darkLight ? "#FFFFFF" : null }}>
                <div className="check-div-not-active w-[25px] h-[25px] rounded-full border-solid hoveredCheck flex items-center justify-center">
                    <div onClick={handleClick} className="check-div bg-[#25273D] bg-no-repeat! bg-center! w-[26px] h-[24px] border-solid border-[1px] border-[#393A4B] rounded-[100%]" style={{ backgroundColor: darkLight ? "#FFFFFF" : null }}></div>
                </div>

                <input type="text" placeholder='Create a new todo…' value={input} className='caret-[#3A7CFD] w-[100%] text-[1.8rem] text-[#C8CBE7] font-[400] tracking-[-0.25px] leading-[100%] h-[100%] outline-[0] placeholder:text-[#767992] placeholder:text-[1.8rem] placeholder:font-[400] placeholder:leading-[100%] placeholder:tracking-[-0.25px]' style={{ color: darkLight ? "#393A4B" : "" }} onChange={(e) => setInput(e.target.value)} />
            </div>
        </>
    )
}
