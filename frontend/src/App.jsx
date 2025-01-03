import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Login from './authPages/Login';
import SignUp from './authPages/SignUp';
import { Toaster } from 'react-hot-toast';
import CreatePost from './CreatePost/CreatePost';
import PostView from './components/Post/PostView';
import UserCardList from './components/UserPosts/UserCardList';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import MainProfilePage from './Pages/ProfilePage/MainProfilePage';
import MainEditPage from './EditPost/MainEditPage';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>

  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  },
  {
    path: '/create-post',
    element: <CreatePost></CreatePost>
  },
  {
    path: '/post/:id',
    element: <PostView></PostView>
  }, {
    path: '/users-posts',
    element: <UserCardList></UserCardList>

  },
  {
    path: '/user-profile',
    element: <MainProfilePage></MainProfilePage>
  }, {
    path: '/edit-post/:id',
    element: <MainEditPage></MainEditPage>
  }

])
// import CardList from './components/Post/CardList';
function App() {
  return (

    <RouterProvider router={appRouter}>


    </RouterProvider>




  );
}

export default App;