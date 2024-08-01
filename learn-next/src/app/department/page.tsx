
import Link from "next/link"

export default function department(){
    // const depart = ['Mechanical','ECE','CSC','Civil']
    return(
        <>
            <h2>Department</h2>
            <h3>
                <Link href={'/department/Mechanical'} >Mechanical</Link>
            </h3>
            <h3>
                <Link href={'/department/ECE'} >ECE</Link>
            </h3>
            <h3>
                <Link href={'/department/CSC'} >CSC</Link>
            </h3>
            <h3>
                <Link href={'/department/Civil'} >Civil</Link>
            </h3>
        </>
    )
}