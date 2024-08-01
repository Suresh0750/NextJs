
'use client'

import { useState } from "react"

export default function layoutPage({children}:{children: React.ReactNode}){
    const [name,setName] = useState<string>()
    return(
        <div className="h-screen">
            <header className="bg-[#dc2626] p-5">
                This is authendication header folder
            </header>
            <input type="text"  onChange={(e)=>setName(e.target.value)}/>
            {children}
            <footer className="bg-[#d4d42a] p-11">
                This is authendication footer folder 
            </footer>
        </div>
    )
}