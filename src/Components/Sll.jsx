
export default function Sll({ im, ti,pr,dell}) {
    return (
        <div className="bg-amber-400 h-28 w-90 md:w-160 lg:w-230 mt-6 p-2 flex items-center justify-between rounded-sm">
            <img className="h-23 w-23 rounded-2xl" src={im} alt="" />
            <p>{ti}</p>
            <span className=" relative top-8 left-8 text-green-700 font-bold ">${ pr}</span>
            <div className=" w-full p-2 gap-3 flex items-center justify-between">
                <input className="" type="checkbox" />
                <button onClick={dell} className=" border-2 border-black text-red-600 w-20 md:w-26 lg:w-30 h-10 rounded-2xl cursor-pointer hover:border-black/50">Delete</button>
            </div>
            
        </div>
    )
}
