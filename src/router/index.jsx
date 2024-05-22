import Layout from './layout'
import Login from '@/views/Login'
import Home from '@/views/Home'
import NotFound from '@/views/NotFound'
import routerMock from './routerMock'

const router = [
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'home',
                element: <Home />
            },
            ...routerMock
        ]
    },
    { path: '*', element: <NotFound /> },
]

export default router
