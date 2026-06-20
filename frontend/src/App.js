import { useState } from "react";
import "@/App.css";
import LandingPage from "@/pages/LandingPage";
import IntroSplash from "@/components/IntroSplash";

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

  return (
    <div className="App bg-omg-void min-h-screen">
      {showIntro && <IntroSplash onFinish={finishIntro} />}
      <LandingPage />
    </div>
  );
}

export default App;
