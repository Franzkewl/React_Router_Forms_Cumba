import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setError("Please fill in your name and email.");
      return;
    }

    setError("");
    navigate("/thank-you");
  }

  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Email:{" "}
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Message:{" "}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
