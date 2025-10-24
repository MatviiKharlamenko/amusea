import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set your exact launch date here (YYYY, Month-1, Day, Hour, Minute)
  // Example: December 25, 2025 at 10:00 AM = new Date(2025, 11, 25, 10, 0)
  const LAUNCH_DATE = new Date(2025, 11, 24, 10, 0); // December 24, 2025 at 10:00 AM

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = LAUNCH_DATE - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Store email in localStorage (in production, send to backend)
      const subscribers = JSON.parse(
        localStorage.getItem("subscribers") || "[]"
      );
      subscribers.push({ email, date: new Date().toISOString() });
      localStorage.setItem("subscribers", JSON.stringify(subscribers));

      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ backgroundColor: "#f9f7f4" }}
    >
      <div className="max-w-2xl w-full text-center space-y-16">
        {/* Logo */}
        <div className="animate-fade-in">
          <img
            src="/amusea/logo.svg"
            alt="AMUSEA"
            className="w-32 h-auto mx-auto logo-svg transition-all duration-700"
          />
        </div>

        {/* Brand Name */}
        <div className="space-y-6 animate-fade-in-up">
          <h1
            className="text-6xl md:text-8xl font-light tracking-[0.2em] font-['Recoleta']"
            style={{ color: "#3a3a3a" }}
          >
            AMUSEA
          </h1>
          <div
            className="w-12 h-px mx-auto"
            style={{ backgroundColor: "#3a3a3a" }}
          ></div>
          <p
            className="text-sm md:text-base tracking-[0.3em] font-light uppercase font-['Poppins']"
            style={{ color: "#3a3a3a", opacity: 0.7 }}
          >
            Coming Soon
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="group">
              <div
                className="text-4xl md:text-6xl font-light font-['Recoleta'] mb-2"
                style={{ color: "#3a3a3a" }}
              >
                {String(item.value).padStart(2, "0")}
              </div>
              <div
                className="text-xs md:text-sm tracking-[0.2em] uppercase font-light font-['Poppins']"
                style={{ color: "#3a3a3a", opacity: 0.5 }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="max-w-md mx-auto space-y-6 animate-fade-in-up animation-delay-400">
          <p
            className="text-sm tracking-[0.15em] font-light font-['Poppins']"
            style={{ color: "#3a3a3a", opacity: 0.7 }}
          >
            Where every bag tells a story
          </p>

          {!subscribed ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER YOUR EMAIL"
                  required
                  className="w-full px-6 py-4 bg-transparent text-sm tracking-[0.1em] font-light font-['Poppins'] focus:outline-none transition-colors"
                  style={{
                    border: "1px solid #3a3a3a",
                    color: "#3a3a3a",
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 text-sm tracking-[0.2em] font-light uppercase font-['Poppins'] transition-all duration-300"
                style={{
                  backgroundColor: "#3a3a3a",
                  color: "#f9f7f4",
                }}
              >
                Notify Me
              </button>
            </form>
          ) : (
            <div className="px-6 py-4" style={{ border: "1px solid #3a3a3a" }}>
              <p
                className="text-sm tracking-[0.15em] font-light font-['Poppins']"
                style={{ color: "#3a3a3a" }}
              >
                Thank you for subscribing
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-12 animate-fade-in-up animation-delay-600">
          <p
            className="text-xs tracking-[0.2em] font-light font-['Poppins']"
            style={{ color: "#3a3a3a", opacity: 0.4 }}
          >
            © 2025 AMUSEA
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
