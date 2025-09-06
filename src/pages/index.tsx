import Hero from "@/sections/Hero"
import SectionOne from "@/sections/SectionOne";
import SectionTwo from "@/sections/SectionTwo";
import SectionThree from "@/sections/SectionThree";
import SectionFour from "@/sections/SectionFour";


export default function Home() {
  return (
    <div>
      <Hero/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <div className="w-full h-3 bg-blue-300"></div>
      <SectionFour/>
      <div className="w-full h-3 bg-blue-300"></div>
    </div>
  );
}
