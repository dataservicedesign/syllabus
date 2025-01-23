import Navigation from "./nav";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <main>
      <Navigation />
        {children}
        </main>
      <Footer />
    </>
  )
}