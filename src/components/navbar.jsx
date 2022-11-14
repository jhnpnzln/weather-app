import Buttons from "./button"

export function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark" >
            <a className="navbar-brand" href="#">Weather Forecast</a>
            <Buttons text="Logout" />
        </nav>
    )
}