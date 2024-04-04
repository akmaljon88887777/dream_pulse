import { FaRegBuilding } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { Card } from "@material-tailwind/react";
import React from "react";

function Banner() {
  return (
    <div id="banner" className="flex justify-end lg:-ml-24 xl:ml-0">
      <div className="xl:w-[77.3%] md:w-[100%] md:justify-end md:-ml-10 h-auto p-2 bg-white flex justify-center">
        <div className="grid lg:grid-cols-2 gap-[1%] md:mx-10 lg:gap-5 md:grid-cols-1 grid-cols-1 justify-center items-center">
          <Card className="xl:w-[459px] lg:w-[360px] md:w-[full] width-[430px]">
            <div className="text-start p-10">
              <div>
                <FaBalanceScale size={96} color="#369" />
              </div>
              <br />
              <div>
                <h4 className="text-[#006699] text-[25.6px]">About Us</h4>
              </div>
              <br />
              <div>
                <p className="mb-5 text-[#707172] xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]">
                  When first section is scrolled up, BG image will be
                  disappeared with a parallax effect. Donec ac tempor tellus, a
                  eleifend ligula. Fusce vitae sem sed purus euismod
                  condimentum.
                </p>
                <br />
                <p className="text-[#707172] xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]">
                  Sed at orci non metus tristique suscipit vitae in nibh. Sed
                  rutrum odio ac est hendrerit, at vestibulum felis condimentum.
                </p>
              </div>
            </div>
          </Card>
          <Card className="xl:w-[459px] lg:w-[360px] md:w-[full] width-[430px]">
            <div className="text-start p-10">
              <div>
                <FaRegBuilding size={96} color="#369" />
              </div>
              <br />
              <div>
                <h4 className="text-[#006699] text-[25.6px]">
                  Company Profile
                </h4>
              </div>
              <br />
              <div>
                <p className="mb-5 text-[#707172] xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]">
                  You can use this template for your commercial websites or for
                  your clients. You are NOT allowed to re-post this template as
                  a downloadable ZIP file on your template collection sites. It
                  is illegal.
                </p>
                <br />
                <p className="text-[#707172] xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]">
                  Suspendisse fermentum orci eget lorem euismod suscipit. Morbi
                  condimentum odio metus, at finibus dolor sollicitudin quis.
                  Curabitur eu congue erat.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Banner;
