import { App } from "./App";
import { Homepage } from "./Homepage/Homepage";
import { SearchPage } from "./Searchbar/searchbar";

export const routes = [

    {
        path: '/', 
        element: <App />,
        children: [

            {index: true, element: <Homepage />},
            {path: 'search', element: <SearchPage />}
        ]
        
    }
]