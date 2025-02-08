import Header from "../header/MinimalHeader";
import Footer from "../footer/Footer";

const MinimalLayout = ({ children }) => {
  return (
    <main className="main-content">
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </main>
  );
};

export default MinimalLayout;
