'use client'
import Link from 'next/link'

import { usePathname } from 'next/navigation'

export default function dashboardLayout({children}:{children:any}){
    const navBar = [
        ['/dashboard' ,'dashboard'],
       [ '/dashboard/setting','setting'],
        ['/dashboard/contact', 'contact']
    ]
    const pathname = usePathname()
    return (
        <section className='h-screen  '>
            <nav>
                <ul className='flex '>
                    {navBar.map((val:string[],i:number)=>{
                         const isActive = pathname.startsWith(`${val[0]}`)
                        return (<li className= {isActive ? "font-bold m-4" :'m-[2em] text-[#ad4747]'} key={i}><Link href={val[0]}>{val[1]}</Link></li>) 
                    }
                    )}
                </ul>
            </nav>
            {children}
        </section>
    )
}
