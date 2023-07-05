import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Block/Layout";
import Home from "../Pages/Home";

export const MainRoute = createBrowserRouter(
    [
        {
            path : "/",
            element : <Layout/>, 
            children : [
                {
                    index : true,
                    element : <Home/>
                }
            ]
        }
    ]
)