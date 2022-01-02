import React, { useState } from "react";
import "../styles/Form.css";
import { validateEmail, validateText } from "../utils/helpers";

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [errorName, setErrorName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === "name") {
            setName(inputValue);
            if (!validateText(inputValue)) {
                setErrorName("Please enter a name.");
                document.querySelector("#name-form").style.borderColor = "red";
            } else {
                setErrorName("");
                document.querySelector("#name-form").style.borderColor =
                    "#ced4da";
            }
        } else if (inputType === "email") {
            setEmail(inputValue);
            if (!validateEmail(inputValue)) {
                setErrorEmail("Email is invalid");
                document.querySelector("#email-form").style.borderColor = "red";
            } else {
                setErrorEmail("");
                document.querySelector("#email-form").style.borderColor =
                    "#ced4da";
            }
        } else {
            setMessage(inputValue);
            if (!validateText(inputValue)) {
                setErrorMessage("Please leave a message.");
                document.querySelector("#message-form").style.borderColor =
                    "red";
            } else {
                setErrorMessage("");
                document.querySelector("#message-form").style.borderColor =
                    "#ced4da";
            }
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        let error = false;
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateText(name)) {
            setErrorName(`Please enter a name.`);
            error = true;
            document.querySelector("#name-form").style.borderColor = "red";
        }

        if (!validateEmail(email)) {
            setErrorEmail("Please enter a valid Email.");
            error = true;
            document.querySelector("#email-form").style.borderColor = "red";
        }
        if (!validateText(message)) {
            setErrorMessage(`Please leave a message.`);
            error = true;
            document.querySelector("#message-form").style.borderColor = "red";
        }

        if (error) {
            return;
        }
        // If successful, we want to clear out the input after registration.
        setName("");
        setEmail("");
        setMessage("");
        alert(`Hello ${name}`);
    };

    return (
        <div>
            <p>Hello {name}</p>
            <form className="form">
                <label className="form-label">Name</label>
                {errorName && (
                    <span className="error-text">&nbsp;{errorName}</span>
                )}
                <input
                    id="name-form"
                    className="form-control"
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                />

                <label className="form-label">Email</label>

                {errorEmail && (
                    <span className="error-text">&nbsp;&nbsp;{errorEmail}</span>
                )}
                <input
                    id="email-form"
                    className="form-control"
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                />
                <label className="form-label">Message</label>
                {errorMessage && (
                    <span className="error-text">&nbsp;{errorMessage}</span>
                )}

                <textarea
                    id="message-form"
                    className="form-control"
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                />
                <button
                    className="btn btn-outline-primary"
                    type="submit"
                    onClick={handleFormSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;
