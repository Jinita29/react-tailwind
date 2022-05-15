import {Suspense, lazy} from "react";
import { Routes, Route } from "react-router-dom";
import PublicRoute from "./layout/PublicRoute";
import PrivateRoute from "./layout/PrivateRoute";

const Home = lazy(() => import('./pages/Home'));
const Error = lazy(() => import('./components/common/Error'));
const Login = lazy(() => import('./auth/Login'));
const Register = lazy(() => import('./auth/Register'));

const PageRoute = () => {
  return (
      <>
          <Routes>
              <Route path={'/'} element={<PublicRoute />}>
                  <Route index element={<Suspense fallback={'Loading'}><Home /></Suspense>} />
                  <Route path={'/'} element={<Suspense fallback={'Loading'}><Home /></Suspense>} />
              </Route>
              <Route path={'/'} element={<PrivateRoute />}>
                  <Route path={'login'} element={<Suspense fallback={'Loading'} ><Login /></Suspense>} />
                  <Route path={'register'} element={<Suspense fallback={'Loading'} ><Register /></Suspense>} />
              </Route>
              <Route path={'*'} element={<Suspense fallback={'Loading'} ><Error /></Suspense>} />
          </Routes>
      </>
  )
}

export default PageRoute;