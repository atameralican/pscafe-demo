import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { CardSlider, Carousel } from "@/components/ui/apple-cards-carousel";
import { Card } from "@/components/ui/card";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { SplineScene } from "@/components/ui/splite";
import { bestGames, gamesNames, googleComments } from "@/constants/homePage";
import Image from "next/image";

export default function Home() {
  const cards = bestGames.map((card, index) => (
    <CardSlider key={card.src} card={card} index={index} />
  ));
  return (
    <div className="w-full h-full py-0 flex flex-col gap-y-5">
     
      {/* ROBOT CARD */}
      <Card className="w-full h-auto md:h-[500px] bg-black/[0.96] relative overflow-hidden">
        <div className="flex flex-col md:flex-row h-full">
          {/*  açıklama */}
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Welcome to our game room
            </h1>
            <p className="mt-4 text-neutral-300 max-w-lg">
              The best and newest games, the comfort of home in a private room,
              the PlayStation experience, and a world full of fun await you...
            </p>
          </div>

          {/* Robot*/}
          <div className="flex-1 relative h-[300px] md:h-auto">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
   

      {/* OYUN İSİMLERİ SLİDER */}
        <div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
          <LayoutTextFlip
            text="The Newest and Best Games Are Here "
            words={gamesNames}
          />
        </div>

        {/* OYUN RESİMLER SLİDER  */}
        {/* <Carousel items={cards} /> */}
        Resimler servis ile getirilecek carousele bağlanacak

{/* MÜŞTERİ YORUMLARI SLİDER */}
        <div className="h-full w-full mt-5">
          <AnimatedTestimonials
            testimonials={googleComments}
            subtitle="Thousands of players, thousands of stories. Behind every comment lies an unforgettable memory."
            badgeText="Approved by Gamers"
            trustedCompaniesTitle="Details that complete your gaming experience"
            title="It's Not Just About the Game, It's About the Memories"
            trustedCompanies={[
              "VIP Rooms",
              "Large Screens",
              "Safe Environment",
              "Premium Service",
              "Unlimited Fun",
              "Home Comfort",
            ]}
          />
        </div>

    </div>
  );
}
