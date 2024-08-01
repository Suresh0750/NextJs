
'use client'

import { useRouter } from "next/navigation"

export default function forgetPasswod(){

    const router = useRouter()
    const backPage = ()=>{
        router.back()
    }

    return(
        <>
            <h2>Forget-Password Page</h2>
            <button onClick={backPage}>back</button>
        </>
    )
}