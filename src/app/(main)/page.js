import Banner from "../components/Banner";
import FeatureDestination from "../components/home/FeatureDestination";
import Journey from "../components/home/Journey";
import Travelers from "../components/home/Travelers";
import WhyChoose from "../components/home/WhyChoose";


export default function Home() {
  return (
    <div>
      <Banner/>
      <FeatureDestination/>
      <WhyChoose/>
      <Travelers/>
      <Journey/>
    </div>
  );
}
