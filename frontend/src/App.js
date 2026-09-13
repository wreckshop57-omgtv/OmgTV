import { useState } from "react";
import "@/App.css";
import LandingPage from "@/pages/LandingPage";
import IntroSplash from "@/components/IntroSplash";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("nointro")) return false;
    return !sessionStorage.getItem("omgtv_intro_seen");
  });

  const finishIntro = () => {
    sessionStorage.setItem("omgtv_intro_seen", "1");
    setShowIntro(false);
  };

  const path = window.location.pathname;

  if (path === "/privacy") {
    return <Privacy />;
  }

  if (path === "/terms") {
    return <Terms />;
  }

  return (
    <div className="App bg-omg-void min-h-screen">
      {showIntro && <IntroSplash onFinish={finishIntro} />}
      <LandingPage />
    </div>
  );
}

export default App;
