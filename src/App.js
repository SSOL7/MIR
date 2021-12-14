import './App.css';
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom';
import Invoices from './routes/Invoices';
import Expenses from './routes/Expenses';
import Home from './routes/Home';
import ErrorPage from './routes/Errorpage';
import InvoiceDetail from './routes/InvoiceDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <Link to="/">Taloluettelo</Link>
        <Link to="/invoices">Laskulomake</Link>
        <Link to="/expenses">Kulut</Link>
      </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/invoices/:id" element={<InvoiceDetail />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
