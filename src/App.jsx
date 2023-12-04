import { Outlet, NavLink } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Image Upload</h1>
      <nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/upload'}>Upload</NavLink>
      </nav>
      <Outlet />
      <p>&copy;dec23</p>
    </>
  );
}

export default App;
