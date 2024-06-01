import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { ItemListPage } from './presenter/pages/ItemList/ItemListPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ItemListPage />
    </QueryClientProvider>
  );
}

export default App;
