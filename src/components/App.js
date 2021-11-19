import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Container from './Container/Container';
import AppBar from './AppBar/AppBar';
import Loader from './Loader/Loader';

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
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
