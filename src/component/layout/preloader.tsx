import { createContext, useState } from "react"
import { LayoutProps } from "./props";


export default function Preloader({children}:LayoutProps){
    const [showLoader, setShowLoader] = useState(false)
    const context = createContext(
        {
            closeloader: ()=>{
                setShowLoader(false)
            }
        }
    );
    return (
        <context.Provider value={{
            closeloader: ()=>{
                setShowLoader(false)
            }
        }}>
            {showLoader && <div className="bg-[white] fixed top-0 left-0 w-[100vw] h-[100vh] flex items-center z-2 justify-center">
                <img src="./asset/pondingspice.png"/>
            </div>}
            {
                children
            }
        </context.Provider>
    )
}