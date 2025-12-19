import { page } from "../data/page";

export function Description() {
  return (
    <div className="text-white w-[90%] md:w-[35%] gap-5 flex flex-col">
      <div className="flex flex-col md:text-left text-center gap-6">
        <h1 className="font-[Poppins] text-2xl md:text-4xl font-semibold">Build The Community <br />Your Fans Will Love </h1>
        <p className="font-[Open Sans] font-extralight w-full md:w-[90%] xl:w-[70%] ">{page.description}</p>
      </div>
      <div className="flex md:justify-start justify-center">
        <a className="bg-white px-24 md:px-12 font-[Poppins] font-extralight text-(--button-text) hover:bg-(--button-hover) hover:text-white py-2 rounded-[1.250rem] transition-colors duration-150 shadow-md" href="#" rel="noopener noreferrer">Register</a>
      </div>
    </div>
  )
}