import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark position-sticky sticky-top top-0">
                <div className="container">
                    <Link to="/" className="navbar-brand text-light">Free Palestine</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link text-light">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link text-light">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/documents" className="nav-link text-light">Document</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/history" className="nav-link text-light">History</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </nav>
    )
}
