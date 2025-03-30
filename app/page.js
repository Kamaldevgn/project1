import Image from 'next/image';
import EmailSection from '../components/EmailSection';

export default function Home() {
  return (
    <section>
      {/* introduction section */}
      <div className="my-5 flex items-center justify-between">
        <div className="flex flex-col items-center"> 
          <Image 
            src="/me.jpg" 
            alt="Kamal" 
            width={55} 
            height={55} 
            className="rounded-full mb-3 object-cover"
            priority
          />
          <p className="text-3xl font-semibold text-zinc-300 ">Kamal</p>
          <p className="text-ls font-semibold text-neutral-500 font-poppins">Frontend Developer</p>
        </div>
        <div className=" mb-5 flex gap-3 items-center text-m">
          <a href="/.">Home</a>
          <a href="./Projects">Projects</a>
          <a href="./Projects/contact">Contact</a>
          <div className="flex gap-1 items-center">
            <a target="_blank" className="p-[0.3rem] hover:bg-white rounded-md hover:text-black transition-colors duration-400" href="https://www.linkedin.com/in/kamalpreet-singh-a54351322/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.5c-.967 0-1.75-.784-1.75-1.75s.783-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm12.5 10.5h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-9h3v1.25c.591-.885 1.567-1.25 2.5-1.25 2.209 0 4 1.791 4 4v5.75z"/>
              </svg>
            </a>
            <a href="https://github.com/Kamaldevgn" className="p-[0.3rem] hover:bg-white rounded-md hover:text-black transition-colors duration-400" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
              >
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.385.6.113.793-.263.793-.58 0-.287-.01-1.044-.015-2.05-3.338.726-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.605-2.665-.307-5.466-1.333-5.466-5.93 0-1.31.467-2.38 1.236-3.22-.123-.303-.535-1.527.117-3.18 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.398 3.003-.403 1.02.005 2.047.137 3.003.403 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.241 2.877.118 3.18.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.81 1.1.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .32.19.7.8.58C20.565 22.093 24 17.595 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <EmailSection />

    </section>
  );
}