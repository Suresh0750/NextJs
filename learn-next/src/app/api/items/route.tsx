

export async function GET(req:Request){
    const type = req.nextUrl.searchParams.get('')
    console.log(type)
    console.log('reched')
    return new Response('Hello developer in route side')
}
export async function POST(req:Request){
    // const type = req.nextUrl.searchParams.get('')
    console.log(req)
    return Response.json([
        {name:'suresh',Degree:'MECHANICAL',age:20},
        {name:'pranav',Degree:'COMPUTER SCIENCE',age:31}
    ])
}
