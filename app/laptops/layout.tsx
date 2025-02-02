import { lists } from "./lists";
import ContentPart from "@/components/contentPart";
import CategorySelection from "@/components/categorySelection";


interface lists {
  icon:string,
  id: number;
  dir: string;
  label: string;
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    
          
        
      <div className="drawer lg:drawer-open">
        <ContentPart>
        {children}
        </ContentPart>

        <div className="drawer-side shadow-lg">
          <ul className="z-50 menu text-base-content min-h-full w-60 ">
            {/* Sidebar content here */}
            {lists.map((item) => (
              <li key={item.id} className="text-base mb-1 ">
                <CategorySelection category={item.category} src={item.icon} alt={item.label} label={item.label} />
              </li>
            ))}
          </ul>
        </div>
      </div>
     
  );
}
