

import { Metadata } from "next"
import { notFound } from "next/navigation"
import { resolve } from "path"


type customer = {
    params :{
        customerID : string,
        reviewID: string
    }
}

export  const metadata=async ({params}:customer):Promise<Metadata>=>{
    const title =await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`Iphone ${params.customerID}`)
        },100)
    })
    return{
        title  : `customer page ${params?.customerID}`
    }
}

export default function customerId({params}:customer){
     
    if(parseInt(params?.reviewID)>1000){
        notFound()
    }
    return(
        <div className="h-screen">
            <h2>customerId</h2>
            <h3>customer{params.customerID} reviewerID{params.reviewID}</h3>
        </div>
        
    )
}