import React from 'react'
import { useState } from 'react'
const Edit = ({ item, tasks, setTasks, setEdit }) => {
    const [input, setInput] = useState(item.title)
    const handleUpdate = (e) => {
        e.preventDefault()
        const newItem = tasks.map(element => (
            item.id == element.id ? { ...element, title: input } : element
        ))
        setTasks(newItem)
        setEdit("")
    }
    return (
        <form onSubmit={handleUpdate} className='flex w-full ml-12 gap-2'>
            <div><input type='text' value={input} onChange={(e) => setInput(e.target.value)} className='bg-black px-2 text-orange-100 rounded-lg h-[40px] w-[230px]' /></div>
            <div><button type='submit' className=' bg-orange-100 font-bold text-xl rounded-lg px-2 text-red-900 h-[40px] '>UPDATE</button></div>
        </form>
    )
}
export default Edit
