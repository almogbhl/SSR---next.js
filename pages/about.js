import Link from "next/link";
import Image from '../components/Image';


const About = () => (
  <div>
    <h1>About</h1>
    <Link href="/">
      <button>Back</button>
    </Link>
    <Image />
    <p>Hello World</p>
  </div>
);

export default About;
