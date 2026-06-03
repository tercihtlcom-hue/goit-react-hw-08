import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import Contacts from './pages/Contacts/Contacts';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <div>Refreshing user...</div>;
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Registration />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;