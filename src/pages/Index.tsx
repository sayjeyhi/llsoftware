
import Scene3D from "../components/Scene3D";
import SocialLinks from "../components/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="mb-12">
        <Scene3D />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4 fade-in">
        CatShoulder.dev
      </h1>
      
      <p className="text-lg text-gray-600 text-center max-w-md mb-12 fade-in-delay-1">
        Building beautiful digital experiences with passion and precision.
      </p>

      <SocialLinks />
    </div>
  );
};

export default Index;
