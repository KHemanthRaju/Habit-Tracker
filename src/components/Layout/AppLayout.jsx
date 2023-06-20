import { ToastContainer } from "react-toastify";
import Header from "../Header/Header";
import { AppRoutes } from "../../routes/AppRoutes";
import { Footer } from "../Footer/Footer";

export const AppLayout = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <section className="section">
        <AppRoutes />
      </section>
      <Footer />
    </div>
  );
};
