import { Slide, Fade } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";
const Loading = () => {
  const images = [
    "/img/Flowers/Flower1.png",
    "/img/Flowers/Flower2.png",
    "/img/Flowers/Flower3.png",
    "/img/Flowers/Flower4.png",
    "/img/Flowers/Flower5.png",
  ];
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <TypeAnimation
        sequence={["Welcome", 300]}
        wrapper="span"
        speed={10}
        className="md:text-8xl text-6xl font-heading font-bold text-black typing mb-2 lg:ml-10"
        cursor={false}
      />
      <div className="flex flex-row justify-center items-center px-2">
        <Slide>
          <img height={100} width={100} src={images[1]} />
        </Slide>
        <Slide>
          <img height={100} width={100} src={images[2]} />
        </Slide>
        <Fade>
          <img height={100} width={100} src={images[0]} />
        </Fade>
        <Slide direction="right">
          <img height={100} width={100} src={images[4]} />
        </Slide>
        <Slide direction="right">
          <img height={100} width={100} src={images[3]} />
        </Slide>
      </div>
    </div>
  );
};

export default Loading;
