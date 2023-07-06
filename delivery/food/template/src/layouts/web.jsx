import { Outlet } from "react-router-dom";

import Container from "@/components/ui/container";
import WebNavbar from "@/components/navigation/web/navbar";
import Footer from "@/components/navigation/footer";

const Web = () => {
  return (
    <section className="m-0 font-sans text-base antialiased font-normal min-h-screen h-full dark:bg-slate-900 bg-gray-50 leading-default text-slate-500">
      <Container>
        <WebNavbar />
        <Outlet />
        <Footer />
      </Container>
    </section>
  );
};

export default Web;
