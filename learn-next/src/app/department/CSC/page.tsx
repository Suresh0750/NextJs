'use client'
import { useRouter } from "next/navigation"

export default function CSC(){
    const router = useRouter()
    const back = ()=>{
        router.push('/department')
    }
    return(
        <>
            <h2>CSC Department</h2>
            <h3>OOPS Concept</h3>
            <button onClick={back}>back</button>
        </>
    )
}