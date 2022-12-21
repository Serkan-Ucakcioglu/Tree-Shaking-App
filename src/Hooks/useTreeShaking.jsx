import { useDispatch, useSelector } from "react-redux";
import {
  activeApple,
  activeShake,
  cancelShake,
  selectedApple,
} from "../features/treeSlice";

function useTree() {
  const dispatch = useDispatch();
  const apple = useSelector(selectedApple);
  const shakeTree = () => {
    if (!apple) {
      dispatch(activeShake());
    }
    setTimeout(() => {
      dispatch(activeApple());
    }, 4000);

    setTimeout(() => {
      dispatch(cancelShake());
    }, 3000);
  };

  return shakeTree;
}

export default useTree;
