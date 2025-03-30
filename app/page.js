import Navbar from '../components/Navbar';
import EmailSection from '../components/EmailSection';
import About from '../components/About';
import Project from '../components/Project';

export default function Home() {
  return (
    <section>
      <Navbar />
      <About />
      <EmailSection />
      <Project/>

    </section>
  );
}