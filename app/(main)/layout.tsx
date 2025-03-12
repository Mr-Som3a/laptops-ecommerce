import Footer from "@/components/footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      
      <main>{children}</main>
      <Footer />
    </>
  );
}
