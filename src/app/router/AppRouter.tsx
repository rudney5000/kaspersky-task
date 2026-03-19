import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Layout} from "@/app/router/Layout.tsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children:[]
    }
])

export const AppRouter = () => <RouterProvider router={router}/>