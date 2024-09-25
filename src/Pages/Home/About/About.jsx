import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row lg:gap-32">
          <div className="relative ">
            <img
              src={person}
              alt="person"
              className="w-full relative rounded-md"
            />
            <img
              src={parts}
              alt="person"
              className="max-w-[350px] max-h-[350px] absolute -bottom-20 -right-20 border-4  border-white rounded-xl hidden shadow-md lg:block"
            />
          </div>

          <div>
            <h1 className="text-5xl font-bold">
              About Us We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              We started car doctor Imports back in 2015 and by the Grace of
              Almighty and blessings from our wellwishers, we have come far in
              the Automotive Industry as Car Importer and Seller. But ever since
              we entered this line of business, we personally encountered
              several complaints among our customers that they could not find
              reliable service centres for their very favourite cars.
            </p>
            <button className="px-4 py-3 rounded-md bg-[#ff3811] text-white">
              Get more info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
