import Introduction from "../../components/Introduction";
import Featured from "../../components/featured/Featured";


const Home = () => {
  return (
    <div className="homeContent">
      <Introduction name = "Featured Products"/>
      <Featured />
    </div>
  );
};

export default Home;
