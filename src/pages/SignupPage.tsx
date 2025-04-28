
import { SignUpForm } from "@/components/AuthForms";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface SignupPageProps {
  onSignUp: (name: string, email: string, password: string) => void;
}

const SignupPage = ({ onSignUp }: SignupPageProps) => {
  return (
    <div className="min-h-screen bg-accent/30 flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center p-4 mt-16">
        <SignUpForm onSignUp={onSignUp} />
      </div>
      <Footer />
    </div>
  );
};

export default SignupPage;
