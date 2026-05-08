import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Lock, Mail, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useQuickBite } from "@/context/QuickBiteContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useQuickBite();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    login(email);
    navigate("/dashboard");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 via-white to-amber-100 px-4 py-8">
      <Card className="w-full max-w-md border-orange-100 shadow-xl">
        <CardHeader className="space-y-4 text-center">
          <div className="mx-auto inline-flex rounded-xl bg-orange-500 p-3 text-white shadow-md">
            <UtensilsCrossed className="h-6 w-6" />
          </div>
          <CardTitle className="text-3xl text-slate-900">QuickBite Login</CardTitle>
          <CardDescription>Sign in to order your favorite meals in minutes.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block space-y-2">
              <span className="text-sm font-medium text-slate-700">Email</span>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  className="pl-10"
                />
              </div>
            </label>

            <label className="block space-y-2">
              <span className="text-sm font-medium text-slate-700">Password</span>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  className="pl-10"
                />
              </div>
            </label>

            {error ? <p className="text-sm text-red-500">{error}</p> : null}

            <Button type="submit" className="h-11 w-full bg-orange-500 text-white hover:bg-orange-600">
              Login
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default LoginPage;
