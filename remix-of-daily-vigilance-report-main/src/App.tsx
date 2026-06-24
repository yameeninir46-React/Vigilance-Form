import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import VigilanceFormR1 from "./pages/VigilanceFormR1";

import OperationsPage from "./components/OperationsPage";
import ExecutiveDirectorPage from "./components/ExecutiveDirectorPage";
import BasisPage from "./components/BasisPage";
import SoftwaresPage from "./components/SoftwaresPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>

      <Toaster />
      <Sonner />

      <BrowserRouter>

        <Routes>

          {/* Login */}
          <Route
            path="/"
            element={<LoginPage />}
          />

          {/* Dashboard */}
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          {/* Operations */}
          <Route
            path="/operations"
            element={<OperationsPage />}
          />

          {/* Executive Director */}
          <Route
            path="/executive-director"
            element={<ExecutiveDirectorPage />}
          />

          {/* Basis */}
          <Route
            path="/basis"
            element={<BasisPage />}
          />

          {/* Softwares */}
          <Route
            path="/softwares"
            element={<SoftwaresPage />}
          />

          {/* Form */}
          <Route
            path="/form"
            element={<VigilanceFormR1 />}
          />

          {/* Not Found */}
          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;