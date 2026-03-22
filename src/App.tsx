import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// TODO: Remove after verifying Sentry error tracking works
function SentryTestButton() {
  return (
    <button
      type="button"
      onClick={() => {
        throw new Error("This is your first error!");
      }}
      style={{
        position: "fixed",
        bottom: 16,
        right: 16,
        zIndex: 9999,
        padding: "8px 16px",
        background: "#e11d48",
        color: "#fff",
        border: "none",
        borderRadius: 6,
        cursor: "pointer",
        fontSize: 14,
      }}
    >
      Break the world
    </button>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="app-container min-h-screen bg-bde-void text-bde-frost">
        <Toaster />
        <Sonner />
        <SentryTestButton />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Navigate to="/#projects" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
