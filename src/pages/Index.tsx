
import Scene3D from "../components/Scene3D";
import SocialLinks from "../components/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-white to-gray-50
      dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800
    ">
      <div className="mb-12">
        <Scene3D />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4 fade-in dark:text-white"

      style={{
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundImage: "linear-gradient(135deg, #E84B3C, #F2C511, #3398DB)"
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
