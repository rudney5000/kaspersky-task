import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from '@/app/router/Layout.tsx'
import { WelcomePage } from '@/pages/WelcomePage/WelcomePage.tsx'
import { UsersPage } from '@/pages/UsersPage/UsersPage.tsx'
import { GroupsPage } from '@/pages/GroupsPage/GroupsPage.tsx'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <WelcomePage />,
      },
      {
        path: '/users',
        element: <UsersPage />,
      },
      {
        path: '/groups',
        element: <GroupsPage />,
      },
    ],
  },
])

export const AppRouter = () => <RouterProvider router={router} />
