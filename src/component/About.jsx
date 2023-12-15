import { Slide, Fade } from "react-awesome-reveal";
import Honelyn from "/img/honelyn02.jpg";

function About() {
  return (
    <div id="About">
      <div className=" mt-10 font-serif flex lg:h-screen md:flex-row flex-col items-center justify-center">
        <div className="md:w-1/2 flex flex-col items-center justify-center">
          <Slide>
            <img
              src={Honelyn}
              alt=""
              className="md:h-[35rem] h-[25rem] rounded-md my-4"
            />
          </Slide>
        </div>

        <div className="md:w-1/2 flex flex-col items-center justify-center">
          <Slide direction="right">
            <h1 className="text-[50px] md:text-[80px] text-center font-bold tracking-[-.2rem] ">
              About Me
            </h1>
            <p className="md:text-2xl text-xl text-justify md:p-10 p-5">
              I'm <b>Honelyn</b>, a floral artist specializing in crafting
              personalized floral arrangements for all occasions, each creation
              reflects your sentiments. My aim is to infuse joy, beauty, and a
              natural touch into your celebrations—whether it's for love,
              friendship, or a milestone achievement.
            </p>
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default About;
