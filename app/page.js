export default function Home() {
  return (
    <section>
      {/* introduction section */}
      <div className="flex flex-col w-full h-full"> 
        <p className="text-lg font-semibold text-zinc-300 ">Kamal</p>
        <p className="text-xs font-semibold text-neutral-500 font-poppins">Frontend Developer</p>
        <div className="w-auto text-zinc-200 text-base font-poppins py-6">
          <p>Just your friendly neighborhood fullstack developer crafting delightful digital experiences. When I'm not busy coding or designing, you can find me perfecting my coffee brewing skills or arguing with my cat about the best way to use a mouse. Currently freelancing and making magic happen one project at a time!</p>
        </div>
      </div>
    </section>
  );
}