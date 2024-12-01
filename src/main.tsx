import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/home"
import Preloader from "./component/layout/preloader"
import PagesLayout from "./component/layout/pageslayout"
let element = document.getElementById("root")
if (element) {
    let root = createRoot(element)   
    root.render(
        <BrowserRouter>
            <Preloader>
                <PagesLayout>
                        <Routes>
                            <Route path="/" element={
                                <Home/>
                            }/>
                        </Routes>
                    </PagesLayout>
            </Preloader>
        </BrowserRouter>
    )
}
