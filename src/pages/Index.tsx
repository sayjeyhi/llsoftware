import { lazy, Suspense } from "react";
const Scene3D = lazy(() =>import("../components/Scene3D"));
import SocialLinks from "../components/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-white to-gray-50
      dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800
    ">
      <div className="mb-12 text-2xl text-white animate-bounce animate-float">
        <Suspense fallback={<div>...</div>}>
          <Scene3D />
        </Suspense>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4 fade-in dark:text-white"
        style={{
          backgroundImage: "linear-gradient(135deg, #E84B3C, #F2C511, #3398DB)",
          backgroundSize: "200% 200%",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "text-animation 3s ease infinite",
        }}
      >
        CatShoulder.dev
      </h1>

      <p className="text-lg text-gray-600 text-center max-w-md mb-12 fade-in-delay-1 dark:text-gray-400">
        Building beautiful digital experiences with passion and precision.
      </p>

      <SocialLinks />
    </div>
  );
};

export default Index;
