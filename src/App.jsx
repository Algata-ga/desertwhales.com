import { Navbar } from "./components";
import {
    Section1,
    Partner,
    Service,
    Cards,
    Portfolio,
    BeforeMedium,
    Medium,
    Footer,
    KOIMap,
} from "./sections";

function App() {
    return (
        <>
            <Navbar />
            <Section1 />
            <Partner />
            <Service />
            <Cards />
            <KOIMap />
            <Portfolio />
            <BeforeMedium />
            <Medium />
            <Footer />
        </>
    );
}

export default App;
