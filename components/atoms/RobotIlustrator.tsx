import Image from 'next/image';

export default function RobotIlustrator() {
    return (
        <>
              {/* Central Robot Illustration - Image */}
              <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-[320px] md:w-[640px] lg:w-[920px] h-auto relative animate-float overflow-visible">
                    <Image
                      src="/robot-hero.png"
                      alt="AI Robot Chatbot"
                      width={920}
                      height={920}
                      className="w-full h-auto object-contain drop-shadow-[0_0_100px_rgba(59,130,246,0.6)] transform-gpu scale-125 md:scale-150 lg:scale-150 origin-bottom"
                      priority
                    />
                  </div>
              </div>
              </>
    );
}
