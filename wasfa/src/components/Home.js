import React from "react";

const Home = () => {
  return (
    <>
      <div
        class="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
        style={{
          backgroundImage: `url("https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg")`,
        }}
      >
        <div className="w-[1080px] h-[300px]  flex flex-col justify-start items-center bg-white ">
          <div className="font-semibold text-6xl tracking-tighter font-sans flex-shrink flex justify-start items-start py-2 px-2 mr-3 mt-20">
            Wasfa
          </div>
          <h1 className="text-xl flex justify-start	">
            Unleash your creativity and share masterpieces
          </h1>
          <h1 className="text-xl"> recipes with the world</h1>
        </div>{" "}
        <div className="flex flex-row gap-20 w-[1080px] justify-center items-center bg-white">
          <img
            src="https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe-500x500.jpg"
            className="rounded-full w-[150px] h-[150px]"
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3GIE_phcXL9IVW6QRKk5_P61PMZfiwNyfWg&usqp=CAU"
            className="rounded-full w-[150px] h-[150px]"
          />

          <img
            src="https://thehappyfoodie.co.uk/wp-content/uploads/2022/07/049_EtonMessCake-scaled.jpg"
            className="rounded-full w-[150px] h-[150px]"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
