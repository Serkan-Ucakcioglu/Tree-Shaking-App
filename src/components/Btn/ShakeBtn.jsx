import useTree from "../../Hooks/useTreeShaking";
import { useSelector } from "react-redux";
import { selectedApple } from "../../features/treeSlice";

function ShakeBtn() {
  const shakeTree = useTree();
  const apple = useSelector(selectedApple);
  return (
    <button
      onClick={shakeTree}
      disabled={apple}
      className={`shake-btn ${apple && "disabled"}`}
    >
      Shake Tree
    </button>
  );
}

export default ShakeBtn;
