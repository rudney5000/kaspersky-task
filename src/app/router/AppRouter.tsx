import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Layout} from "@/app/router/Layout.tsx";
import {WelcomePage} from "@/pages/WelcomePage/WelcomePage.tsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children:[{
            path: "/",
            element: <WelcomePage/>
        }]
    }
])

export const AppRouter = () => <RouterProvider router={router}/>