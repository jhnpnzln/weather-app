import Login from "../components/login";
export function LandingPage() {
  return (
    <div className="landing-page-container">
      <div className="card">
        <div className="card-body">
          <p className="landing-page-message">
            Welcome to the weather forecast web application. Please login with
            your Github user to use the application and view the weather in your
            city.
          </p>
          <div className="d-grip gap-2">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}
