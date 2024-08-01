
'use client'
import { useRouter } from "next/navigation"
export default function Login(){
    const router = useRouter()
    const back = ()=>{
        router.push('/forget-password')
    }
    return(
        <>
        <h2>Welcome to Login Page </h2>
        <p onClick={back}>forget-password</p>
        </>
    )
}