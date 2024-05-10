import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
    return(
        <div className="boarder-b-2 border-b-sky-500 py-6">
            <div className="container mx-auto flex justify-between item-center">
                <Link 
                  to="/" 
                  className="text-3xl font bold tracking-tight text-sky-500">
                    HappyEats.com
                </Link>
                <div className="md:hidden">
                    <MobileNav/>
                </div>
                <div className="hidden md:block">
                    <MainNav />
                </div>
            </div>
        </div>
    )

}

export default Header;