export default function Text({setDarkLight, darkLight}) {

    let dark = "/images/icon-moon.svg"
    let light = "/images/icon-sun.svg"

    return (
        <div className='flex justify-between items-center w-[100%]'>
            <h1 className='text-[4rem] leading-[100%] text-[#ffffff] font-[700] tracking-[15px] '>TO DO</h1>
            <img src={darkLight ? dark : light} onClick={() => setDarkLight(!darkLight)} className="cursor-pointer" alt="" />
        </div>
    )
}
