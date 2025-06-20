
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the landing page (which is the root route)
    navigate("/");
  }, [navigate]);

  return null;
};

export default Index;
