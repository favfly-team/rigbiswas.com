import Link from "next/link";

const Header = () => {
  return (
    <div>
      <nav className="navbar fixed wide bg-color navbar-expand-lg banner--clone banner--stick">
        <div className="container-fluid flex-row justify-content-center">
          <div className="navbar-header justify-content-center">
            <div className="navbar-brand">
              <img
                // src="https://images.prismic.io/rigbiswas/e2aa4884-3d12-4ad6-a039-7c252cac6c0d_rig-photography-logo.png?auto=compress,format"
                src="https://images.prismic.io/rigbiswas/d2bf3013-c72b-4c0f-a75b-39fe952c79af_logo-white.png?auto=compress,format&w=80"
                alt="Rig Photography Logo"
              />
            </div>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .bg-color {
          background: radial-gradient(
            circle,
            rgba(57, 30, 107, 1) 0%,
            rgba(30, 14, 66, 1) 100%
          );
        }
        @media (min-width: 992px) {
          .navbar.fixed .navbar-brand img {
            height: 70px !important;
            padding: 10px 0;
          }
        }
        .social-mute a i {
          color: #fff;
        }
        .hamburger:before,
        .hamburger span,
        .hamburger:after {
          background-color: #fff;
        }
        .navbar {
          border-bottom: 3px solid;
          border-color: #eca2ff;
          box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default Header;
