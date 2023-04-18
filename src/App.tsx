import { ToastContainer } from 'react-toastify';
import { UserProvider } from './providers/UserContext';
import 'react-toastify/dist/ReactToastify.css';
import Router from './routes';
import { GlobalStyles } from './styles/global';

const App = () => (
  <>
    <ToastContainer autoClose={2500} position='top-right' />
    <GlobalStyles />
    <UserProvider>
      <Router />
    </UserProvider>
  </>
);

export default App;
