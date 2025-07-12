import {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState<number>(0)

    return (<>
            <h1 className='text-2xl font-bold mb-2'>Counter</h1>
            <h2 className='text-lg mb-4'>Count:{count}</h2>
            <button onClick={()=>setCount(prevCount=>prevCount+1)} className='px-4 py-2 bg-blue-600 text-white rounded-4xl mr-2'>Increment</button>
            <button onClick={()=>setCount(prevCount=>prevCount-1)} className='px-4 py-2 bg-red-600 text-white rounded-4xl mr-2'>Decrement</button>
        </>
    )
}
export default Counter