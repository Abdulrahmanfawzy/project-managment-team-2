import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./app/index";
// const { t } = useTranslation();

export default function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
          <Router/>
      </QueryClientProvider>
    </>
  );
}
