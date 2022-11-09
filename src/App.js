import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Route/Routes';
import Swal from 'sweetalert2/src/sweetalert2.js'
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <div >
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
