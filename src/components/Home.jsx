import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/Demo.jpg')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-3/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold text-blue-600 leading-tight">
          Welcome 
        </h1>
        <p className="text-blue-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam
          omnis natus accusantium quos. Reprehenderit incidunt expedita
          molestiae impedit at sequi dolorem iste sit culpa, optio voluptates
          fugiat vero consequatur?
        </p>

        <Button title="See Services" />
      </div>
    </div>
  );
};

export default Home;
