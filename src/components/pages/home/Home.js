import Introduction from "./Introduction";
import Featured from "./featured/Featured";

const Home = () => {
  return (
    <div className="homeContent">
      <Introduction />
      <Featured />
    </div>
  );
};

export default Home;
