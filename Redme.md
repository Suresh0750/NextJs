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

