import { fetchTodoActList } from '@/api';
import ItrmList from '@/components/itrm/ItrmList';

function index({ itrmList }) {
  

  return (
    <ItrmList itrmList={itrmList}></ItrmList>
  )
}

export default index