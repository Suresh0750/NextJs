What is Next.js?

    Next js is a React framwork for building web applications.
    It uses React for building user interfaces.
    Provides additional features that enables you to build production-ready applications
    These features include routing, optimized rendering, data fetching, bundling, compiling, and more.

why we learn Next js? 
    Next.js simplifies the process of building a web application for production.
    1. Routing
    2. API routes
    3. Rendering
    4. Data fetching
    5. Styling
    6. optimization
    7. Dev and prod build system


how to install Next js ?

    npx create-next-app@latest


// # Link 

    use to navigate page

// # useRouter from next/navigation


// # [slug]

    /* mention the folder name [slug] we can dynamicly access the file. using ({params}) as a function parameter we can access dynamic router name.

// #[...give any name]

    /* mention multiple dynamic router

// # [[...giveAnyName]]

    docs>[...folderName]

    if we use docs only as a parameter we can't access but now if we use [[...folderName]] 


// # error page 
    error page file name (or) 404 fileName
    not-found.tsx

// # _lib  (private folder)

    using _lib for make Private folder

// # (auth)

    if we use folder as (this parameter) we can easily access inside of the folder without mention the parant folder name

    ex : 
        (auth)> Register
            > login
            > forget-password 

// # Metadata from 'next'

    for using asiging the meta data such as title and description


/// # usePathname

    it is to giving style for specific navbar links.
    const pathname = usePathname()
    pathname.startWith('/router)

// # useRouter

    /* using for navigation
    import {useRouter} from 'next/navigation'
    const router = useRouter()

    router.push('/mention the router')
    router.forward()
    router.back()   // * back use to navigate the previous page is will take route from history
    router.replace()

// # template.tsx instead of layout.tsx

    in the layout side the if we navigate also we can access the input value or show the input value another page not mounte the value

    but we use template.tsx the value will change.

// # Loading.tsx 

    // * it's used to like suspence in react

// # Error boundaries

    error.tsx
     using for show the the error

    function error({error,reset}:{error:Error,reset:()=>void})


// # paralel routes 
    // @folder is naming conversion
