import { getServerAuthSession } from "server/auth";
import ImageSlider from "../component/imageSlider";

export default async function HomePage() {
  const images = ["/slider/1.jpg", "/slider/2.jpg", "/slider/3.jpg"];
  // const session = await getServerAuthSession();
  // console.log(session);
  return (
    <div>
    <ImageSlider/>
    </div>
  );
}
