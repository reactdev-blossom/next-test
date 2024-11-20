import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("RootLayout rendered"); // This log helps to confirm the component is rendering.

  return (
    <>
      <Navbar />
      <main style={{ height: "auto" }}>{children}</main>
      <Footer />
    </>
  );
}
