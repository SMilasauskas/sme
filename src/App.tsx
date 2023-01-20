import { Routes, Route } from 'react-router-dom';
import FormStepper from './Pages/FormStepper/FormStepper';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormStepper />} />
    </Routes>
  );
}

export default App;
