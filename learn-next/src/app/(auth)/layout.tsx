

export default function layoutPage({children}:{children: React.ReactNode}){
    return(
        <div className="h-screen">
            <header className="bg-[#dc2626] p-5">
                This is authendication header folder
            </header>
            {children}
            <footer className="bg-[#d4d42a] p-11">
                This is authendication footer folder 
            </footer>
        </div>
    )
}