import RefreshBtn from "./Btn/RefreshBtn";
import Trees from "./Trees";
import ShakeBtn from "./Btn/ShakeBtn";
import Basket from "./Basket";
import Cows from "./Cows";

function Home() {
  return (
    <div className="container home">
      <Cows />
      <Trees />
      <div className="btn-list">
        <RefreshBtn />
        <ShakeBtn />
      </div>
      <Basket />
    </div>
  );
}

export default Home;
