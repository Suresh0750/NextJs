'use client'

import { useRouter } from "next/navigation"
export default ()=>{
    const router = useRouter()
    const back = ()=>{
        router.push('/dashboard')
    }
    return (
       <main>
        <h2>Contact page</h2>
        <button onClick={back}>back</button>
       </main>
    )
}