

import { Metadata } from "next"
import { notFound } from "next/navigation"


type customer = {
    params :{
        customerID : string,
        reviewID: string
    }
}

export  const metadata=({params}:customer):Metadata=>{
    return{
        title  : `customer page ${params.customerID}`
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