"use client"

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Post() {
    const [title, setTitle] = useState("");
    const [email, setEmail] = useState("");

    const handlePost = () => {
        
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className='flex flex-col gap-3'>
                <div className='flex flex-col'>
                    <span>Titre</span>
                    <input className="border-[1px] border-black p-2 rounded-lg" value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="" id="" placeholder="titre"/>
                </div>
                <div className='flex flex-col'>
                    <span>Email</span>
                    <input className="border-[1px] border-black p-2 rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="" id="" placeholder="email"/>
                </div>
                <button className="px-3 py-2 bg-blue-600 rounded-lg text-white font-semibold" onClick={handlePost}>Poster</button>
            </div>
        </div>
    )
}