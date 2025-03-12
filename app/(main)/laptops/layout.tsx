import ContentPart from "@/components/contentPart";
import Sidebar from "@/components/sidebar";

export default function LaptopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="drawer lg:drawer-open">
      <ContentPart>{children}</ContentPart>

      {/* Sidebar content here */}
      <Sidebar />
    </div>
  );
}
