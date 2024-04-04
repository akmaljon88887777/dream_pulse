import { Card } from "@material-tailwind/react";
import React from "react";
import Form from "./form";

function Footer() {
  return (
    <div id="footer" className="flex justify-end xl:ml-0">
      <div className="xl:w-[77.3%] lg:w-[76.6%] h-auto p-2 bg-white flex justify-center">
        <Card className="w-full grid grid-cols-1 lg:grid-cols-2 border-none rounded-none shadow-none">
          <div className="p-2 items-center flex border-none">
            <Card className="z-0 w-full pl-2 pt-2 rounded-none border">
              <Card className="z-50 rounded-none border ">
                <div className="p-10 text-start">
                  <h4 className="text-[#006699] text-[25px]">Talk to Us</h4>
                  <br />

                  <p class="mb-4 text-start">
                    Sed aliquet, nibh ac hendrerit faucibus, tellus metus
                    viverra tellus, vel volutpat purus orci ac ex.
                  </p>
                  <br />
                  <p class="mb-3">
                    120-240 Orci varius natoque penatibus, <br />
                    parturient montes, 10660 <br />
                    nasvetur ridiculus mus
                  </p>
                </div>
              </Card>
            </Card>
          </div>
          <div className="p-2 ">
            <div>
              <Form />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Footer;
