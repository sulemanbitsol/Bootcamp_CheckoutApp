import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { store } from "./redux/store";

import { Cart, Checkout, Home } from "./pages";
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';

import ProtectedRoute from './routes/ProtectedRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/auth/login" element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } />

            <Route path="/auth/signup" element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            } />
            <Route path="/cart" element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            } />
            <Route path="/checkout" element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            } />
            <Route path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
