

export default function ProductList({params}:{params:{productId:string}}){

    return (
        <div className="h-screen">
            <h2>Single Product</h2>
            <p>
            {params.productId}
            </p>
        </div>
    )
}