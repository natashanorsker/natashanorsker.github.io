import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if this is a hash route that should be handled differently
    const path = location.pathname;
    if (path.startsWith('/projects') || path.startsWith('/services') || path.startsWith('/about')) {
      // This might be a direct navigation to a section that should use hash
      window.location.href = `/#${path.substring(1)}`;
    } else {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        location.pathname
      );
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bde-void">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-bde-frost">404</h1>
        <p className="text-xl text-bde-frost/60 mb-4">Oops! Page not found</p>
        <Link to="/" className="text-bde-violet hover:text-bde-violet-dark underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
