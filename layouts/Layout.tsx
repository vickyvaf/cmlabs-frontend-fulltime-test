import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
