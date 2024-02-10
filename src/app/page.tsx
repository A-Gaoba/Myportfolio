import Sidebar from "./sidebar/Sidebar";
import MainContent from "./mainContent/MainContent";
import { Link } from "lucide-react";


export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen md:p-6 2xl:px-28 gap-2">
      <Sidebar />
      <div className="border-2 p-2 w-full rounded-xl flex-row">
        <MainContent />
      </div>
    </div>
  );
}
