'use client'
// import { useRouter } from "next/navigation"

import Link from "next/link"

export default function Mechanical(){
    
    return(
            <div>
                <h2>Mechanical Engineering</h2>
                <h3>Thermal Engineering</h3>
                <h3>FEA</h3>
                <h3>DTS</h3>
                <Link href={'/department'} replace>
                  <button>back</button>
                </Link>
            </div>
        )
}