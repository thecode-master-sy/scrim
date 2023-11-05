import { Logo } from "@/app/components/Logo";
import LoginComponent from "@/app/components/auth/LoginComponent";

export default function Page() {
  return (
    <div className="w-full flex min-h-screen p-4">
      <LoginComponent />
    </div>
  );
}
