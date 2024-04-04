import { Card } from "@material-tailwind/react";
import React from "react";
import Rasm from "../../Assets/client-1.png";
import Rasm2 from "../../Assets/client-2.png";
import Rasm3 from "../../Assets/client-3.png";
import Rasm4 from "../../Assets/client-4.png";
import Rasm5 from "../../Assets/client-5.png";
import Rasm6 from "../../Assets/client-6.png";
import Rasm7 from "../../Assets/client-7.png";
import Rasm8 from "../../Assets/client-8.png";

function Cards() {
  return (
    <div id="card" className="flex  justify-end">
      <div className="flex xl:w-[77.3%] lg:w-[76.6%] z-0 p-2 pb-10 justify-center bg-[#fff] ">
        <Card className="w-[90%] text-start lg:h-[850px] xl:h-auto p-10">
          <div>
            <h4 className="text-[#006699] text-[25px]">Our Clients</h4>
            <br />
            <p class="mb-5 text-[#707172] text-[18px]">
              Aenean est augue, iaculis ut arcu a, cursus tempus eros. Maecenas
              ut efficitur lectus, vel commodo nibh. Vivamus consequat massa non
              euismod facilisis. Morbi assumsan non libero a vehicula. Donec
              blandit suscipit magna sit amet elementum.
            </p>
          </div>
          <div className="grid gap-3 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-3 lg:gap-[2%] lg:gap-y-[6%] ">
            <Card className="flex justify-center h-[118px] items-center">
              <img src={Rasm} className="h-[auto]" alt="" />
            </Card>
            <Card className="flex justify-center h-[118px] items-center">
              <img src={Rasm2} className="h-[auto]" alt="" />
            </Card>
            <Card className="flex justify-center h-[118px] items-center">
              <img src={Rasm3} className="h-[auto]" alt="" />
            </Card>
            <Card className="flex justify-center h-[118px] items-center">
              <img src={Rasm4} className="h-[auto]" alt="" />
            </Card>
            <Card className="flex justify-center h-[118px] items-center">
              <img src={Rasm5} className="h-[auto]" alt="" />
            </Card>
            <Card className="flex justify-center h-[118px] items-center">
              <img src={Rasm6} className="h-[auto]" alt="" />
            </Card>
            <Card className="flex justify-center h-[118px] items-center">
              <img src={Rasm7} className="h-[auto]" alt="" />
            </Card>
            <Card className="flex justify-center h-[118px] items-center">
              <img src={Rasm8} className="h-[auto]" alt="" />
            </Card>
          </div>
        </Card>
      </div>
      <br />
    </div>
  );
}

export default Cards;
