import React from 'react';
import Navbar from "../../component/navbar/Navbar";
import Banner from "./ui/Banner";
import Gallery from "./ui/Gallery";
import Value from "./ui/Value";
import Clients from "./ui/Clients";
import Reviews from "./ui/Reviews";
import Footer from "../../component/footer/Footer";

function App() {
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <section id={"banner"}>
                <Banner/>
            </section>
            <section id={"gallery"}>
                <Gallery/>
            </section>
            <section id={"value"}>
                <Value/>
            </section>
            <section id={"clients"}>
                <Clients/>
            </section>
            <section id={"reviews"}>
                <Reviews/>
            </section>
            <footer>
                <Footer/>
            </footer>
        </>
    );
}

export default App;
