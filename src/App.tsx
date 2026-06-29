import Router from "./app/index";
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </>
  );
}
