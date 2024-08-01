'use client'
import { useRouter } from "next/navigation"

export default function Register(){
    const router = useRouter()
    const back = ()=>{
        router.push('/forget-password')
    }
    return(
        <>
            <h1>Register Page</h1>
            <button onClick={back}>forget-password</button>
        </>
    )
}