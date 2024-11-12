import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './components/store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// import { AuthLayout, Login } from './components/index.js'
import { Home, Login, SignUp } from "./Pages/PageIndex.js"
import Dashboard from './Pages/Dashboard.jsx'
import { AuthLayout, Stacking } from "./components/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
              <Login />
          </AuthLayout>
        )
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
              <SignUp />
          </AuthLayout>
        )
      },
      {
        path: "/dashboard",
        element: (
          <AuthLayout authentication>
              <Dashboard />
          </AuthLayout>
        )
      },
      {
        path: "/stack",
        element: (
          <AuthLayout authentication>
              <Stacking />
          </AuthLayout>
        )
      },
      //here
      {
        path:"*",
        element: (
          <AuthLayout authentication>
              <Dashboard />
          </AuthLayout> 
        )
      }
      //to here
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
     <RouterProvider router={router}></RouterProvider>
    </Provider>
)

