import { useAuth0 } from "@auth0/auth0-react";

export const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button type="button" onClick={() => loginWithRedirect()} className="btn btn-outline-primary">
        {" "}
        Login
      </button>
    )
  );
};

export default Login;
