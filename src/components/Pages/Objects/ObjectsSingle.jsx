import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectObjectsPostById } from "../../../features/objects/objectsSlice";

const ObjectsSingle = (props) => {
  const params = useParams();
  const objectsPostId = params.id;

  const objectsPost = useSelector((state) => state.objects);
  console.log(objectsPost);
  return <div>
    В работе
  </div>
}

export default ObjectsSingle;