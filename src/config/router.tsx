import { createBrowserRouter } from "react-router-dom";
import Main from "@/components/screens/Main.tsx";
import Rules from "@/components/screens/Rules.tsx";
import Agreement from "@/components/screens/Agreement.tsx";
import { Routes } from "@/shared/constants.ts";
import AuthProvider from "@/providers/AuthProvider.tsx";
import AuthWrapper from "@/components/layout/AuthWrapper/AuthWrapper.tsx";
import Login from "@/components/screens/Login.tsx";
import Registration from "@/components/screens/Registration.tsx";
import BookPage from "@/components/screens/BookPage.tsx";
import Profile from "@/components/screens/Profile.tsx";

export const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <AuthProvider />,
    children: [
      {
        path: Routes.HOME,
        element: <Main />,
      },
    ],
  },

  {
    path: Routes.HOME,
    element: <AuthProvider />,
    children: [
      {
        path: "category/:id",
        element: <Main />,
      },
    ],
  },

  {
    path: Routes.HOME,
    element: <AuthProvider />,
    children: [
      {
        path: Routes.PROFILE,
        element: <Profile />,
      },
    ],
  },

  {
    path: Routes.HOME,
    element: <AuthProvider />,
    children: [
      {
        path: "category/:id/:bookId",
        element: <BookPage />,
      },
    ],
  },

  {
    path: Routes.HOME,
    element: <AuthProvider />,
    children: [
      {
        path: Routes.RULES,
        element: <Rules />,
      },
    ],
  },

  {
    path: Routes.HOME,
    element: <AuthProvider />,
    children: [
      {
        path: Routes.AGREEMENT,
        element: <Agreement />,
      },
    ],
  },

  {
    path: Routes.HOME,
    element: <AuthWrapper />,
    children: [
      {
        path: Routes.AUTH,
        element: <Login />,
      },
    ],
  },

  {
    path: Routes.HOME,
    element: <AuthWrapper />,
    children: [
      {
        path: Routes.REGISTRATION,
        element: <Registration />,
      },
    ],
  },
]);
