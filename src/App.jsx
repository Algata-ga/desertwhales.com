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
import AnimatedCursor from "react-animated-cursor";

function App() {
    return (
        <>
            <AnimatedCursor
                innerSize={15}
                outerSize={19}
                color="198,156,102"
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={5}
                clickables={[
                    "a",
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    "label[for]",
                    "select",
                    "textarea",
                    "button",
                    ".link",
                ]}
            />
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
