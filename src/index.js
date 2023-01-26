import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from 'pages/Login/Login';
import Signup from 'pages/Signup/Signup';
import Mypage from 'pages/Mypage/Mypage';
import MyReview from 'pages/Mypage/MyReview/MyReview';
import MyLike from 'pages/Mypage/MyLike/MyLike';
import MyInfo from 'pages/Mypage/MyInfo/MyInfo';
import MyInfoFrom from 'pages/Mypage/MyInfo/MyInfoFrom';
import Main from 'pages/Main/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: '/',
        element: <Main />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/search/:value',
        // element: <Search />,
      },
      {
        path: 'mypage',
        element: (
          // <ProtectedRoute>
          <Mypage />
          // </ProtectedRoute>
        ),
        children: [
          {
            path: '/mypage/review',
            element: <MyReview />,
          },
          {
            path: '/mypage/like',
            element: <MyLike />,
          },
          {
            path: '/mypage/info',
            element: <MyInfo />,
            children: [
              {
                path: '/mypage/info/modify',
                element: <MyInfoFrom />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
