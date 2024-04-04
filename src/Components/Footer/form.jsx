import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function Form() {
  return (
    <div style={{ background: "transparent", boxShadow: "none" }}>
      <form className="mt-8 mb-2 text-center flex justify-center flex-col m-auto xl:w-96 lg:w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col text-start justify-center gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <div className="flex justify-end  ">
          <Button className="mt-6 w-[98px] bg-white text-[#707172] h-[45px] border-[#cdcecf] border-b uppercase">
            send
          </Button>
        </div>
      </form>
    </div>
  );
}
