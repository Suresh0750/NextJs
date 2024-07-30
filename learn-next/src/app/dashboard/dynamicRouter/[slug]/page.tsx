
'use client'

import { useRouter } from "next/navigation"

export default function dynamicRouter({params}:{params:any}){
    const router = useRouter()
    const back = ()=>{
        router.push('/dashboard')
    }
    return(
        <>
            <h2 className="h-screen">Dynamic router checking</h2>
            <p>Here url {params.slug}</p>
            <button onClick={back}>back</button>
        </>
    )
}
