



export default function Layout({children}:{children:React.ReactNode}){

    return(
        <>
        <div className="h-screen">
            <header className="bg-[#0000ff93] p-8">
                Welcome to our website
            </header>
            <div>
                {children}
            </div>
            <footer className="bg-[#2befe57d] p-8">
                you can check the copy right info
            </footer>
        </div>
        </>
    )
}