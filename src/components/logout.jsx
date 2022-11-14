import { useAuth0 } from "@auth0/auth0-react";

export const Logout = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button onClick={() => logout()} className="btn btn-outline-primary">
        {" "}
        Logout
      </button>
    )
  );
};

export default Logout;
