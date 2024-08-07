import React, { useState } from 'react';

export default function Quiz1() {
    
    const [member, setMember] = useState([]);
    const addMember = (e) => {
        const newMember = member.concat({
            id: member.length + 1,
            name: e.target.text.value,
            email: e.target.email.value
        })
        setMember(newMember);
        e.preventDefault();
    }
    const deleteMember = (e) => {
        const newMember = member.filter((value) => value.id !== e.target.id);
        setMember(newMember);
    }
    return (
        <div>
            <form action="" onSubmit={(e) => {addMember(e)}}>
                <input type="text" name="text" placeholder='name' />
                <input onKeyDown={(e) => {
                    if(e.key === "Enter") {
                        e.target.parentElement.submit();
                        e.preventDefault();
                    }
                }} type="email" name="email" placeholder='email'/>
                <button type='submit' >Enter</button>
            </form>

            {member.map((value) => (
                <h1 id={value.id} onDoubleClick={(e) => {deleteMember(e)}}>{value.name} : {value.email}</h1>
            ))}
        </div>
    )
}