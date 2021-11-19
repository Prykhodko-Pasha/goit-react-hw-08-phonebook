import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

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
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/register" exact>
            <RegisterPage />
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/contacts">
            <ContactsPage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
