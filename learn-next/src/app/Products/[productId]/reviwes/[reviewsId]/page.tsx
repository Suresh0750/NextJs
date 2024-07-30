



export default function reviewsId({params}:{params:{productId:string,reviewsId:string}}){
    return(
        <div>
            <h1>Check Dynamic router</h1>
            <p>Products{params.productId} and reviewsId{params.reviewsId} </p>
        </div>
    )
}