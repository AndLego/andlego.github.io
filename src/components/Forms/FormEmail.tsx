import React from "react";
import styles from "./Form.module.css";
import { FiGithub, FiTwitter, FiLinkedin, FiSend } from "react-icons/fi";

const Form = () => {
    const [contact, setContact] = React.useState(true);
    const [thanks, setThanks] = React.useState(false);

    const [visitor, setVisitor] = React.useState("");
    const [visitorMail, setVisitorMail] = React.useState("");
    const [visitorMessage, setVisitorMessage] = React.useState("");

    ////cuadrar un estado para la form y otro para thanks, para manerja el laoding
    const user = React.useRef<HTMLInputElement>(null);
    const email = React.useRef<HTMLInputElement>(null);
    const message = React.useRef<HTMLTextAreaElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (user.current && email.current && message.current) {
            setVisitor(user.current.value);
            setVisitorMail(email.current.value);
            setVisitorMessage(message.current.value);

            fetch("https://formsubmit.co/ajax/a51786e5a2dea09ba6522b2cbbac739d", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: user.current.value,
                    email: email.current.value,
                    message: message.current.value,
                }),
            })
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => console.log(error));

            setContact(false);
            setThanks(true);
        }
    };

    const handleBack = () => {
        setVisitor("");
        setVisitorMail("");
        setVisitorMessage("");

        setContact(true);
        setThanks(false);
    };

    return (
        <>
            {contact && (
                <form
                    className={styles.form}
                    autoComplete="off"
                    action="https://formsubmit.co/a51786e5a2dea09ba6522b2cbbac739d"
                    method="POST"
                    onSubmit={handleSubmit}
                >
                    <input type="hidden" name="_subject" value="New email wooo!" />

                    <label>Name:</label>
                    <input ref={user} type="text" name="name" required />

                    <label>Email:</label>
                    <input ref={email} type="email" name="email" required />

                    <label>Message: </label>
                    <textarea ref={message} name="text" required rows={5} />

                    <button>Send<FiSend /></button>
                </form>
            )}
            {thanks && (
                <div className={styles.thanks}>
                    <h1>
                        Thanks {visitor}!
                    </h1>
                    <p>I'll answer you as soon as i can.</p>
                    <p>Also feel free to contact on:</p>
                    <ol>
                        <li>
                            <a target="_blank" href="https://github.com/andlego">
                                <FiGithub />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.linkedin.com/in/andlego">
                                <FiLinkedin />
                            </a>
                        </li>
                    </ol>
                    <button onClick={handleBack}>Send another one</button>
                </div>
            )}
        </>
    );
};

export default Form