import {
  Routes,
  Route
} from 'react-router-dom'
import Layout from './layout';
import PagesRoutes from './pages';

function App() {
  return (
    <Layout>
      <PagesRoutes/>
    </Layout>
  );
}

export default App;
