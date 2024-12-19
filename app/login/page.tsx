'use client'

import { redirect } from "next/navigation";
import { useEffect, useState } from "react"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/data/user.json')
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);

    const handleLogin = () => {
        {users.map((user: any) => {
            if(user.email === email && user.password === password) {
                redirect("/");
            }
        })}
    }

    return(
        <div className="flex flex-col items-center justify-center w-full h-full">
            <h1 className="font-bold text-2xl">Se connecter</h1>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                    <span>Email</span>
                    <input className="border-[1px] border-black p-2 rounded-lg" type="email" name="" id="" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
                </div>
                <div className="flex flex-col gap-2">
                    <span>Mot de passe</span>
                    <input className="border-[1px] border-black p-2 rounded-lg" type="password" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="mot de passe"/>
                </div>
                <button className="px-3 py-2 bg-blue-600 rounded-lg text-white font-semibold" onClick={handleLogin}>Se connecter</button>
            </div>
        </div>
    )
}