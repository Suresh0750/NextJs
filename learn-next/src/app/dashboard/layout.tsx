
import Link from 'next/link'

export default function dashboardLayout({children}:{children:any}){
    const navBar = [
        ['/dashboard' ,'dashboard'],
       [ '/dashboard/setting','setting'],
        ['/dashboard/contact', 'contact']
    ]
    return (
        <section className='h-screen  '>
            <nav>
                <ul className='flex '>
                    {navBar.map((val:string[])=>(
                         <li className='m-[2em]'><Link href={val[0]}>{val[1]}</Link></li>
                    ))}
                </ul>
            </nav>
            {children}
        </section>
    )
}