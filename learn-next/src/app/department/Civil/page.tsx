'use client'
import { useRouter } from "next/navigation"


export default function Civil(){
    const navigation = useRouter()
    function back(){
        navigation.push('/department')
    }
    return(
       <>
        <h2>Civil department</h2>
        <h3>Planing and Desinging</h3>
        <button onClick={back}>back</button>
       </>
    )
}