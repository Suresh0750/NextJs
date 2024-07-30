



export default function docs({params}:{params:{blog:string[]}}){

    if(params.blog?.length==2){
        return(
            <div className="h-screen">
                <h2>Viewing Dogs features {params.blog[0]}and concepts {params.blog[1]}</h2>
            </div>
        )
    }else if(params.blog?.length==1){
        return(
            <div className="h-screen">
                <h2>Viewing Dogs features {params.blog[0]}</h2>
            </div>
        )
    }
    return <div className="h-screen">
                <h2>Viewing Docs</h2>
            </div>
}