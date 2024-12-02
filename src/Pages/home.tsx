
const AboutUs=()=>{
    return(
        <div className="flex flex-col p-1 gap-2 border">
            <h1>About Us</h1>
            <img className="w-[200px] h-[300px]" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptates incidunt, cum minus architecto atque? Magnam, eum dolore ipsam ut eligendi ipsum, ea tempora a culpa natus in harum non.</p>
            <button>Know More</button>
        </div>
    )
}


export default function Home() {
    return(
        <section className="flex flex-col">
            <img className="w-full h-[300px]"/>
            <div className="flex flex-col">
                <AboutUs/>
            </div>
        </section>
    )
}
