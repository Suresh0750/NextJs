


function Random(){
    return Math.floor((Math.random()*10))
}


export default function IsCheck(){
   let count:number = Random()

   if(count==1) throw new Error(`Error from server count ${count}`,)
    else{
        return (
            <>
            <h2>Random Number Page</h2>
            count : {count}
            </>
        )
    }
}

