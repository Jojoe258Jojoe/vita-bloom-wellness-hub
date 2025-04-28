
import { ForgotPasswordForm } from "@/components/AuthForms";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ForgotPasswordPage = () => {
  return (
    <div className="min-h-screen bg-accent/30 flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center p-4 mt-16">
        <ForgotPasswordForm />
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;
