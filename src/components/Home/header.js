import React from "react"
import Fade from "react-reveal/Fade"

import hero from "../../images/removed-Holographic.webp"

const Header = () => {
  return (
    <Fade duration={2200}>
      <div className="max-w-7xl mx-auto lg:px-6 md:px-3">
        <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-0 xl:mt-28 flex gap-10 lg:flex-justify lg:flex flex-col lg:flex-row flex-col-reverse">
          <div className="text-center lg:text-left flex flex-col justify-center">
            <h1 className="text-black text-4xl font-semibold opacity-70">
              Indra B Sudirman
            </h1>

            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              I'm Dedicated and skilled Software Development Engineer in Test
              (SDET) with extensive experience in automation testing, CI/CD
              integration, and test framework development. Proficient in Java,
              Selenium, Appium, and various CI/CD tools. Committed to ensuring
              the highest quality of software products through rigorous testing
              and continuous improvement.
            </p>
          </div>
          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4 flex lg:justify-end justify-center">
            <img
              className="rounded-xl w-auto h-full object-cover flex justify-center"
              src={hero}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Header
