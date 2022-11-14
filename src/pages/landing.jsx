import Login from "../components/login";
export function LandingPage() {
  return (
    <div className="landing-page-container">
      <p>
        Welcome to the weather forecast web application. Please login with your
        Github user to use the application and view the weather in your city.
      </p>
      <Login />
    </div>
  );
}
