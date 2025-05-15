import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { CloudLightning } from "lucide-react";
import CitySearch from "./city-search";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 w-full border-b bg-background/95 backdrop-blur-sm py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {" "}
        <Link to="/" className="flex flex-col items-center">
          <p className="text-xs font-bold px-4 bg-gradient-to-r from-green-500 via-green-700 to-blue-600 rounded-md bg-clip-text text-transparent flex ">
            <span>CLIM</span>
            <CloudLightning className="text-green-300 h-4 w-4" />
            <span>MORA</span>
          </p>
        </Link>
        <div className="flex gap-2">
          <CitySearch />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
export default Header;
