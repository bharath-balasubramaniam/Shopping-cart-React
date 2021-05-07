export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h3 className="navbar-brand">BV Cosmetics</h3>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample05"
          aria-controls="navbarsExample05"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarsExample05">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <p className="nav-link">
                Home <span className="sr-only"></span>
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link">About</p>
            </li>
            <li className="nav-item dropdown">
              <p
                className="nav-link dropdown-toggle"
                id="dropdown05"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </p>
              <div className="dropdown-menu" aria-labelledby="dropdown05">
                <p className="dropdown-item">Demo</p>
                <p className="dropdown-item">Tutorials</p>
                <p className="dropdown-item">Offers</p>
              </div>
            </li>
            <li className="nav-item">
              <p className="nav-link disabled">Contact</p>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
