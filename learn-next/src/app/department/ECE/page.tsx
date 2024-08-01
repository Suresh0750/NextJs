
'use client'
import { useRouter } from "next/navigation"


export default function ECE(){

    const router = useRouter()
    const back = ()=>{
        router.push('/department')
    }

    return(
        <>
        <h2>ECE department</h2>
        <h3>Circuit</h3>
        <button onClick={back}>back</button>
        </>
    )
}