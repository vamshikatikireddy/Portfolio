import styles from "./style.module.css";
import { Flex } from "../../components/functional";
import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbypkzV_DA8trj5aV3x4U_2f5TcHbRqFGgVUHAx201PyRiQycNmAGc0lvzNDBObASRz-lQ/exec";

const Contact = () => {
  const initialFormState: FormData = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormState);
  // States to manage the submission process and user feedback
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });

      const result = await response.json();

      if (result.result === "success") {
        setSubmitStatus(
          "Thank you for your message! I'll get back to you soon."
        );
        setFormData(initialFormState); // Clear the form on success
      } else {
        throw new Error("Submission failed on the server.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <Flex direction="column" className={styles.container}>
      <h1 className={styles.title}>Contact</h1>
      <Flex direction="row" gap="1rem">
        <Flex
          direction="column"
          horizontal="center"
          className={styles.contentContainer}
        >
          <div>
            <h2 className={styles.subtitle}>Get in Touch</h2>
            <p className={styles.text}>I'd love to hear from you.</p>
            <span>
              If you have any inquiries or just want to say hi, please use the
              contact form!
            </span>
          </div>
        </Flex>

        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <Flex direction="column" gap="1rem">
            <Flex direction="row" horizontal="between" gap="1rem">
              <Flex direction="column" gap="0.5rem" style={{ flex: 1 }}>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  id="firstName"
                  name="firstName"
                  className={styles.inputBox}
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting} // Disable during submission
                />
              </Flex>
              <Flex direction="column" gap="0.5rem" style={{ flex: 1 }}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  id="lastName"
                  name="lastName"
                  className={styles.inputBox}
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting} // Disable during submission
                />
              </Flex>
            </Flex>

            <Flex direction="column" gap="0.5rem">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                id="email"
                name="email"
                className={styles.inputBox}
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting} // Disable during submission
              />
            </Flex>

            <Flex direction="column" gap="0.5rem">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message..."
                className={styles.textarea}
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting} // Disable during submission
              ></textarea>
            </Flex>

            <Flex horizontal="right" vertical="center" gap="1rem">
              {/* Display the success or error message */}
              {submitStatus && (
                <p className={styles.submitStatusMessage}>{submitStatus}</p>
              )}

              <button
                className={styles.submitButton}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default Contact;
