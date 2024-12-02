import { NavLink as Link} from "react-router-dom";
import { LayoutProps } from "./props";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { GrShop } from "react-icons/gr";
 
export default function PagesLayout({children}: LayoutProps) {
    const [isOpen, setIsOpen] = useState(false)
    const options = [
        "All Departments",
        "Best Deals",
        "New Arrival",
        "On Sale",
        "Seasonings"
    ]
    const [value, setValue] = useState(options[0]);
    return(<main>
        <p className="bg-[#7F54B3] text-white text-center p-2">
            For Order, Wholesale and Reselling Related Queries Contact +21 3874 848 437 
        </p>
        <nav className="px-2">
            <div className="flex justify-between py-6 gap-1">
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
                <button className="capitalize text-[12px] text-nowrap bg-[#7F54B3] text-white py-2 px-4 rounded-2xl">
                    Book your order now
                </button>
            </div>
            <div className="flex gap-2 cursor-pointer relative justify-between items-center">
                <div className="flex items-center gap-2 max-w-[200px] w-full" onClick={()=>{
                    setIsOpen(!isOpen)
                }}>
                    <div className="p-3 bg-[#7F54B3] rounded">
                        <RiMenu2Fill color="white" />
                    </div>
                    <p className="font-700 font-[15px] flex gap-1 items-center w-full justify-between">{value} <div className={ isOpen ?"rotate-180":"rotate-0"}><IoMdArrowDropdown/></div></p>
                    <div className={`z-1 fixed w-full ${!isOpen && "scale-0"} h-full`} onClick={()=> setIsOpen(false)}>
                    </div>
                    <div className={`flex flex-col absolute max-w-[200px] w-full top-[45px] z-2 ${!isOpen && "scale-0"} bg-white transition-all-[200ms]`}>
                        {
                            options.map((text)=>(
                                <div className="px-3 py-2 border" onClick={()=>{
                                    console.log('called')
                                    setValue(text)
                                    setIsOpen(false)
                                }}>{text}</div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex gap-1 border max-w-[500px] p-2 rounded w-full">
                    <input className="outline-none w-full" placeholder="Search for Products"/>
                    <div className="p-3 bg-[#7F54B3] rounded"><CiSearch color="white"/></div>
                </div>
                <div className="flex gap-2 items-center">
                    <CiLock size={25} />
                    <CiHeart size={25} />
                    <GrShop size={25} />
                </div>
            </div>
        </nav>
        <div className="px-2">{
            children
        }</div>
    </main>)
}