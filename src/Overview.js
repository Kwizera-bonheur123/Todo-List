import React, { useState } from 'react'
import Edit from './Edit'
const Overview = (props) => {
    const handleEdit = (id) => {
        props.setEdit(props.tasks.find((item) => item.id == id))
    }
    const removeItem = (e) => {
        let name = e.target.getAttribute("name")
        props.setTasks(props.tasks.filter((item) => item.id != name))
    }
    return (
        <div class='wrapper'>
            {props.tasks.map((item) => (
                props.edit.id == item.id ? <Edit tasks={props.tasks} setEdit={props.setEdit} edit={props.Edit} setTasks={props.setTasks} item={item} /> :
                    <div className='display ml-12' key={item.id}>
                        <div>{item.title}</div>
                        <div className='flex gap-2'>
                            <div
                                onClick={() => handleEdit(item.id)}
                                style={{
                                    gap: '15px',
                                    cursor: "pointer",
                                    color: "blanchedalmond"
                                }}>Edit</div>
                            <div
                                style={{
                                    gap: '15px',
                                    color: "red",
                                    fontSize: "25px",
                                    cursor: "pointer"
                                }}
                                name={item.id} onClick={removeItem}>Delete</div>
                        </div>
                    </div>
            ))
            }
        </div >
    )
}

export default Overview
