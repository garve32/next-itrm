import ItrmList from '@/components/itrm/ItrmList';

function index({ itrmList }) {
  

  return (
    <ItrmList itrmList={itrmList}></ItrmList>
  )
}

// export async function getServerSideProps() {
//   const paramDt = '20240712';
//   const teamId = 'HATW';
//   const userId = 'garve32';
//   // const { data } = await fetchTodoActList({paramDt, teamId, userId});
//   const {data} = await fetchMockList();
//   return {
//     props: {
//       itrmList: data,
//     }
//   }
// }

export default index