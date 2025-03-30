import Navbar from '../components/Navbar';
import EmailSection from '../components/EmailSection';
import About from '../components/About';

export default function Home() {
  return (
    <section>
      <Navbar />
      <About />
      <EmailSection />
    </section>
  );
}