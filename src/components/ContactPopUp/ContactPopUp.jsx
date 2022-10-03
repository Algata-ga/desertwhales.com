import Modal from "react-modal";
import style from "./ContactPopUp.module.css";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/logo.png"

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
        backgroundColor: "rgba(0, 0, 0, 0.75)"
    }
};

const ContactPopUp = ({ state, close }) => {


    return (
        <Modal isOpen={state} style={customStyles}>
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
                <form className={style.form} onSubmit={() => { }}>
                    <label htmlFor="">Name
                        <input type="text" name="name" id="" placeholder="Name" />
                    </label>
                    <label htmlFor="">Email
                        <input type="email" name="email" id="" placeholder="Email" />
                    </label>
                    <label htmlFor="">Message
                        <input type="text" name="" id="" placeholder="Message" />
                    </label>
                    <input type="submit" value="Send" />
                </form>
            </div>
        </Modal>
    );
};

export default ContactPopUp;