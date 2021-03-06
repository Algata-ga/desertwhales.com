import { Navbar, Sidebar } from "./components";
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
import { Element } from "react-scroll";
import AnimatedCursor from "react-animated-cursor";
import { useIdle } from "react-use";
import { Transition,CSSTransition } from "react-transition-group";

function App() {
    const isIdle = useIdle(5e3, true);
    const transitionStyles = {
        entering: { opacity: 0 },
        entered: { opacity: 1},
        exiting: { opacity: 1 },
        exited: { opacity: 0},
    };

    return (
        <>
        <Transition in={isIdle} timeout={500}>
                {(state) => (
                    <Sidebar
                        styles={{
                            transition: "opacity 0.5s ease-in-out",
                            ...transitionStyles[state],
                        }}
                    />
                )}
            </Transition>
            
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
            <Element name="Home">
                <Navbar />
                <Section1 />
            </Element>
            <Partner />
            <Element name="About">
                <Service />
            </Element>
            <Element name="Services">
                <Cards />
            </Element>
            <KOIMap />
            <Portfolio />
            <BeforeMedium />
            <Element name="Blogs">
                <Medium />
            </Element>
            <Footer />
        </>
    );
}

export default App;
