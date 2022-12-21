import { useDispatch, useSelector } from "react-redux";
import RefreshSvg from "../../assets/RefreshSvg";
import { reset, selectedApple } from "../../features/treeSlice";

function RefreshBtn() {
  const dispatch = useDispatch();
  const apple = useSelector(selectedApple);

  const refresh = () => {
    dispatch(reset());
  };
  return (
    <button
      disabled={apple == false}
      className={`refresh-btn ${!apple && "disabled"}`}
      onClick={refresh}
    >
      <RefreshSvg />
    </button>
  );
}

export default RefreshBtn;
