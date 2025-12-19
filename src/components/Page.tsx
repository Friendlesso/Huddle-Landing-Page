import { Description } from "./Description";
import { Illustration } from "./Illustration";

export function Page() {
  return (
    <>
      <section className="flex md:flex-row flex-col justify-center items-center gap-10">
        <Illustration />
        <Description />
      </section>
    </>

  )
}