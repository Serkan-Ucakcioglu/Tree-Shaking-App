import { useDispatch, useSelector } from "react-redux";
import RefreshSvg from "../../assets/RefreshSvg";
import { reset, selectedGoBasket } from "../../features/treeSlice";

function RefreshBtn() {
  const dispatch = useDispatch();
  const goBasket = useSelector(selectedGoBasket);

  const refresh = () => {
    dispatch(reset());
  };
  return (
    <button
      id="refresh-btn"
      disabled={!goBasket}
      className={`refresh-btn ${!goBasket && "disabled"}`}
      onClick={refresh}
    >
      <RefreshSvg />
    </button>
  );
}

export default RefreshBtn;
