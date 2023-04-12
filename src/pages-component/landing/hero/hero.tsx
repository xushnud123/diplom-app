import { FC } from "react";
import ReactCompareImage from "react-compare-image";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import cls from "./hero.module.scss";

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <div className={cls.wrapper}>
      <div className={cls.container}>
        <div className={cls.blogs}>
          <div className={cls.blog}>
            <ReactCompareImage
              leftImage='/images/landing/1.jpg'
              rightImage='/images/landing/2.jpg'
            />
          </div>
          <div className={cls.blog}>
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src='/images/landing/left.svg'
                  alt='Image one'
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src='/images/landing/right.svg'
                  style={{ filter: "grayscale(1)" }}
                  alt='Image two'
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
