import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";
import { useEffect, useState } from "react";

export default function AppLogin() {
  const images = ["/sea.jpg", "/sunset.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5秒ごとに画像を切り替え

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentImageIndex(nextImageIndex);
    }, 1000); // 1秒後に現在の画像を更新（トランジション時間と合わせる）

    return () => clearTimeout(timeout);
  }, [nextImageIndex]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-sm sm:text-base relative">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${image})`,
            opacity:
              index === currentImageIndex
                ? 1
                : index === nextImageIndex
                  ? 1
                  : 0,
            zIndex: index === currentImageIndex ? -2 : -1
          }}
          aria-hidden="true"
        />
      ))}
      <div className="flex-grow flex flex-col lg:flex-row relative z-10">
        <div className="hidden sm:flex w-full bg-white/30 backdrop-blur-sm flex-col justify-center py-6 sm:px-6 lg:pl-36">
          <h1 className="text-7xl sm:text-8xl lg:text-[10rem] font-bold text-white drop-shadow-lg mb-4">
            Play
          </h1>
          <h1 className="text-7xl sm:text-8xl lg:text-[10rem] font-bold text-white drop-shadow-lg mb-4 text-center">
            your
          </h1>
          <h1 className="text-7xl sm:text-8xl lg:text-[10rem] font-bold text-white drop-shadow-lg text-end">
            Life
          </h1>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 py-6 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-white drop-shadow-md">
              Meyasubako
            </h1>
          </div>

          <div className="mt-4 sm:mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <LoginForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
