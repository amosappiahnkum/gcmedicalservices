import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Lab from './sections/Lab'
import Appointment from './sections/Appointment'
import Feedback from './sections/Feedback'
import Contact from './sections/Contact'
import Footer from "@/sections/Footer.tsx";
import Navbar from "@/components/Navbar.tsx";


export default function App() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            <Navbar/>
            <main>
                <Hero/>
                <About/>
                <Services/>
                <Lab/>
                <Appointment/>
                <Feedback/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    )
}
