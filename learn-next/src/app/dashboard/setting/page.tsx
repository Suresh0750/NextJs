'use client'
import { useRouter } from "next/navigation"
export default ()=>{
    const router = useRouter()
    const back = ()=>{
        router.push('/dashboard')
    }
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Setting Pages</h1>
            <button onClick={back}>back</button>
        </main>
    )
}