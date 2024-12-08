import { button, color, typography } from "../styles"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";

const AboutUs=()=>{
    return(
        <div className="flex flex-col gap-4 border w-full max-w-[250px] bg-gray-100">
            <h1 className={typography.header}>About Us</h1>
            <div className="flex flex-col gap-4 p-4 bg-white">
                <img className="w-full h-[300px]" />
                <p className={typography.parag}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptates incidunt, cum minus architecto atque? Magnam, eum dolore ipsam ut eligendi ipsum, ea tempora a culpa natus in harum non.</p>
                <button className={button.pry}>Know More</button>
            </div>
        </div>
    )
}

const HomeWrapper=({heading, button, element}:{heading: string, button: boolean, element: React.ReactNode[]})=>{
    const [currentCard, setCurrentCount] = useState(0);
    return(
        <div className="flex flex-col gap-4 border w-full max-w-[250px] bg-gray-100">
            <div className="flex items-center justify-between pr-4">
                <h1 className={typography.header}>{heading}</h1>
                {
                    button && 
                    (<div className="flex gap-2 justify-center mt-2">
                        <button className="border p-2 rounded" onClick={()=> setCurrentCount((pre)=>{
                            if (pre === 0) {
                                return 0
                            }else{
                                return pre - 1
                            }
                        })}><IoIosArrowBack/></button>
                        <button className="border p-2 rounded" onClick={()=> setCurrentCount((pre)=>{
                            if (pre === element.length - 1) {
                                return element.length - 1
                            }else{
                                return pre + 1
                            }
                        })}><IoIosArrowForward/></button>
                    </div>)
                }
            </div>
            <div className="flex flex-col gap-4 p-4 bg-white">
                {
                    button ? (element[currentCard]) : (element)
                }
            </div>
        </div>
    )
}
const OnSale=()=>{
    let element = [
        <div className="flex gap-4 items-stretch">
                    <img src="" width={60} height={60} />
                    <div className="flex gap-2 flex-col w-full">
                        <p className={typography.parag}>Product</p>
                        <p className="flex justify-between"><span className={`${typography.priceslash}`}>$35</span> <span className={`${typography.price}`}>$35</span></p>
                    </div>
                </div>,
                <div className="flex gap-4 items-stretch">
                <img src="" width={60} height={60} />
                <div className="flex gap-2 flex-col w-full">
                    <p className={typography.parag}>Product</p>
                    <p className="flex justify-between"><span className={`${typography.priceslash}`}>$35</span> <span className={`${typography.price}`}>$35</span></p>
                </div>
            </div>
    ]
    return(
        <HomeWrapper heading="On Sale" button={false}  element={element}/>
    )
}

const CardElement =({discountPrice, productname, priceslash, price}:{discountPrice: number, productname: string, priceslash: number, price:number, src: string})=>{
    return(
        <div className={`flex p-5 flex-col gap-6 bg-[${color.sec}] rounded`}>
            <div className={`flex flex-col max-w-[300px] min-h-[300px] bg-[${color.sec}] border relative`}>
                <img src="" alt="" className="w-full h-full absolute" />
                <button className={`${button.sec} mr-auto ml-2 mt-2`}>
                    -${discountPrice}.00
                </button>
                <button className={`${button.icon} ml-auto mr-2`}>
                    <CiHeart fill="grey" size={30}/>
                </button>
                <button className={`${button.iconsec} mt-auto ml-auto mr-2 mb-2`}>
                    <IoMdAdd size={30}/>
                </button>
            </div>
            <div className="flex flex-col gap-4">
                <p className={typography.parag + " text-center w-full"}>{productname}</p>
                <p className="flex justify-between"><span className={typography.priceslash}>${priceslash}.00</span> <span className={typography.pricesec}>${price}.00</span></p>
            </div>
        </div>
    )
}

const BestDeal =()=>{
    return(
        <HomeWrapper heading="Best Deal" button={true} element={[<CardElement discountPrice={30} price={300} priceslash={270} productname="Shanpo" src=""/>,<CardElement discountPrice={20} price={100} priceslash={120} productname="Orange spice" src=""/>]} />
    )
}

const Testimonial=()=>{
    const Element =({src, text}:{src:string, text:string})=>(<div className="w-full bg-white h-[400px] flex p-4 gap-4 flex-col">
        <img src={src} width={30} height={30} className="rounded-[50%] mx-auto"/>
        <p className={typography.parag}>{text}</p>
    </div>)
    return(
        <HomeWrapper heading="Testimonial" button={true} element={[<Element src="" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit aspernatur vero perferendis reiciendis ullam ab esse in beatae voluptas dolor similique iste sapiente sint voluptatem nostrum, et corrupti magni porro?"/>, <Element src="" text="Lorem 2 ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit aspernatur vero perferendis reiciendis ullam ab esse in beatae voluptas dolor similique iste sapiente sint voluptatem nostrum, et corrupti magni porro?"/>]} />
    )
}

export default function Home() {
    return(
        <section className="flex flex-col gap-6 mt-6">
            <img className="w-full h-[300px]"/>
            <div className="flex flex-col">
                <div className="flex flex-col gap-4 max-w-[250px] w-full overflow-hidden">
                    <AboutUs/>
                    <OnSale/>
                    <BestDeal/>
                    <img src="" className="w-full h-[300px]" />
                    <Testimonial/>
                </div>
                <div className="w-full"></div>
            </div>
        </section>
    )
}

