'use client'


export default function MultipleDynamicRouter({params}:{params:any}){
    return(
        <div className="h-screen">
            <h1>Multiple Dynamic Router</h1>
            {console.log(params)}
            <p>{params.slug[0]}</p>
            {params.slug.map((val:string,i:number)=>(<li key={i}>{val}</li>))}
        </div>
    )
}