import { App } from "./App";
import { Children } from "react";
import { Homepage } from "./Homepage/Homepage";

export const routes = [

    {
        path: '/', 
        element: <App />,
        children: [

            {index: true, element: <Homepage />}
        ]
        
    }
]