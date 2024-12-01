import { NavLink as Link} from "react-router-dom";
import { LayoutProps } from "./props";

export default function PagesLayout({children}: LayoutProps) {
    return(<main>
        <p className="bg-[#7F54B3] text-white text-center p-2">
            For Order, Wholesale and Reselling Related Queries Contact +21 3874 848 437 
        </p>
        <nav className="flex justify-between py-6 p-2 gap-1">
            <img src="" alt="" width={200} height={50}/>
            <div className="w-full justify-center flex">
                <Link  to={"/"} className={({isActive, isPending})=>`${isActive && "text-[#7F54B3]"} px-4 py-3 hover:text-[#7F54B3]`}>
                    Home
                </Link>
                <Link to={"/shop"} className={({isActive, isPending})=>`${isActive && "text-[#7F54B3]"} px-4 py-3 hover:text-[#7F54B3]`}>
                    Shop
                </Link>
                <Link to={"/onsale"} className={({isActive, isPending})=>`${isActive && "text-[#7F54B3]"} px-4 py-3 hover:text-[#7F54B3]`}>
                    Spices in sale
                </Link>
            </div>
            <button className="capitalize text-nowrap bg-[#7F54B3] text-white py-2 px-4 rounded-2xl">
                Book your order now
            </button>
        </nav>
        {
            children
        }
    </main>)
}