

export default function Department({children}:{children:React.ReactNode}){
    return(
        <header className="p-9 bg-[red]">
            <h1>PSN Engineering Colleage</h1>
            {children}
        </header>
    )
}