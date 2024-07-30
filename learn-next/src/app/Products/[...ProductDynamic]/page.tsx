


export default function ProductDynamic({params}:{params:{ProductDynamic:string[]}}){
    return(
        <div className="h-screen">
            <h2>Dynamic Product Router</h2>
            {params.ProductDynamic.map((val,i)=><li key={i}>{val} </li>)}
        </div>
    )
}