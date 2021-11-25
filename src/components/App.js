import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Container from './Container/Container';
import AppBar from './AppBar/AppBar';
import Loader from './Loader/Loader';

import * as authOperations from '../redux/auth/auth-operations';
import { getIsLoggedIn, getIsFetchingUser } from '../redux/auth/auth-selectors';

const HomePage = lazy(() =>
  import('./HomePage/HomePage' /* webpackChunkName: 'home-page' */),
);
const ContactsPage = lazy(() =>
  import('./ContactsPage/ContactsPage' /* webpackChunkName: 'contacts-page' */),
);
const RegisterPage = lazy(() =>
  import('./RegisterPage/RegisterPage' /* webpackChunkName: 'movies-page' */),
);
const LoginPage = lazy(() =>
  import('./LoginPage/LoginPage' /* webpackChunkName: 'movie-details-page' */),
);
const NotFoundPage = lazy(() =>
  import(
    './NotFoundPage/NotFoundPage' /* webpackChunkName: 'not-found-page' */
  ),
);

export default function Phonebook() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isFetchingCurrentUser = useSelector(getIsFetchingUser);

  useEffect(() => {
    dispatch(authOperations.refresh());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                !isLoggedIn ? (
                  <RegisterPage />
                ) : (
                  <Navigate replace to="/contacts" />
                )
              }
            />
            <Route
              path="/login"
              element={
                !isLoggedIn ? (
                  <LoginPage />
                ) : (
                  <Navigate replace to="/contacts" />
                )
              }
            />
            <Route
              path="/contacts"
              element={
                isLoggedIn ? <ContactsPage /> : <Navigate replace to="/login" />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Container>
    )
  );
}
