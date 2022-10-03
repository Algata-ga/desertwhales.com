import Modal from "react-modal";
import style from "./ContactPopUp.module.css";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/logo.png";

const customStyles = {
    content: {
        display: "flex",
        flexDirection: "column",
        height: "min(100vh,58vh)",
        justifyContent: "start",
        alignSelf: "center",
        top: "50%",
        left: "50%",
        width: "min(600px,90%)",
        transform: "translate(-50%, -50%)",
        borderRadius: "26px",
        paddingBottom: "3rem",
        backgroundColor: "transparent",
        backdropFilter: "blur(20px)",
        border: "2px solid #ca9e66",
    },
    overlay: {
        zIndex: "10",
        backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
};

const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
        name: e.target[0].value,
        email: e.target[1].value,
        message: e.target[2].value,
    };
    const google_script_url = import.meta.env.VITE_FORM_URL;
    const encodedUrl =
        google_script_url +
        Object.keys(formData).reduce(
            (prev, cur) => prev + `${cur}=${formData[cur]}&`,
            "?"
        );

    try {
        await fetch(encodedUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
    } catch (err) {
        alert("Sending failed.");
        window.location.reload();
    }
};
const ContactPopUp = ({ state, close }) => {
    return (
        <Modal isOpen={state} close={close} style={customStyles}>
            <div className={style.formcontain}>
                <button className={style.close} onClick={close}>
                    <AiOutlineClose />
                </button>
                <div className={style.logo}>
                    <img src={logo} alt="logo" height={50} />
                </div>
                <div className={style.header}>
                    <h2>Contact Us</h2>
                </div>
                <form
                    className={style.form}
                    onSubmit={(e) => {
                        handleSubmit(e);
                        close();
                    }}
                >
                    <label htmlFor="">
                        Name
                        <input
                            type="text"
                            name="name"
                            id=""
                            placeholder="Name"
                        />
                    </label>
                    <label htmlFor="">
                        Email
                        <input
                            type="email"
                            name="email"
                            id=""
                            placeholder="Email"
                        />
                    </label>
                    <label htmlFor="">
                        Message
                        <input
                            type="text"
                            name="message"
                            placeholder="Message"
                        />
                    </label>
                    <input type="submit" value="Send" />
                </form>
            </div>
        </Modal>
    );
};

export default ContactPopUp;
