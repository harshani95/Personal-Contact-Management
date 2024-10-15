import HeroImage from "../assets/hero.jpg";

const Home = () => {
  return (
    <>
      <div>
        <br />
        <h1 className="text-center">Welcome to Contact Management System</h1>
        <br />
        <img src={HeroImage} alt="Hero Image" />
      </div>
    </>
  );
};

export default Home;
