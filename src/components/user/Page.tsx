import React from "react";

function Page(items: any) { 
    return (
        <ul>
            {/* {items.map((item: any) => (
                <li key={item.id}>
                    {item.firstname} {item.lastname}
                </li>
            ))} */}
            {console.log('this is called')}
        </ul>
    )
}

export default Page;