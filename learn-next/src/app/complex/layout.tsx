
type child={
    children: React.ReactNode,
    users: React.ReactNode,
    Revenue: React.ReactNode,
    notification: React.ReactNode,
}

export default function layoutComplex({children,users,Revenue,notification}:child){

    return(
        <>
        <div>
        {children}
        </div>
        <div className='flex '>
            <div className="flex flex-col">
                <div>{users}</div>
                <div>{Revenue}</div>
            </div>
            <div>{notification}</div>
        </div>
        </>
    )

}