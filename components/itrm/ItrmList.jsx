import { Button, Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell, getKeyValue, Calendar, useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Spacer, Chip} from "@nextui-org/react";
import styles from './ItrmList.module.css';
import { useEffect, useState } from "react";
import ItrmItem from "./ItrmItem";
import {today, getLocalTimeZone, isWeekend } from "@internationalized/date";
import { fetchMockItem, fetchMockList, fetchTodoActItem, fetchTodoActList, saveTodoActItem } from "@/api";
import ItrmCal from "../calendar/ItrmCal";
import SystemLink from "../widgets/SystemLink";
import { calDateToStr } from "@/utils/DateUtils";

function ItrmList() {

  const [itrmList, setItrmList] = useState(null);
  const [item, setItem] = useState({});
  const [isComplete, setIsComplete] = useState(false)
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [selDate, setSelDate] = useState(today(getLocalTimeZone()));

  const getList = async(paramDt) => {
    // setSelDate(paramDt);
    const params = {TODO_DT: paramDt, TEAM_ID: 'teamId', USER_ID: 'garve32'}
    // const response = await fetchMockList(params);
    const {data} = await fetchTodoActList(params);
    setItrmList(data);
  }

  const getItem = async(todoId) => {
    const params = {TODO_DT: calDateToStr(selDate.toDate()), TODO_ID: todoId}
    await fetchTodoActItem(params).then(({data}) => {
      console.log('getItem.data v');
      console.log(data)

      setItem(data.data);
      setIsComplete(data.data.PROGRESS === 'S'?true:false);
      onOpen();
    }).catch((err) => {
      console.error('Error:', err)
      alert(err.response.data.message)
    });
    
    
  }

  const openItem = (params) => {
    console.log('openmodal')
    getItem(params);
  }

  const handleClose = () => {
    getList(calDateToStr(selDate.toDate()));
  }

  // const handleSave = () => {
  //   console.log('handleSave!');
  //   saveTodoActItem(item);
  // }

  return (
    <div className="flex flex-row text-small">
      
      <div className="flex flex-col">
        <ItrmCal handler={getList} selDate={selDate} setSelDate={setSelDate}/>
        <Spacer y={4} />
        <SystemLink />
      </div>
      <Spacer x={4} />
      <div className='w-full'>
        <Table color='default'
          selectionMode="single" aria-label="Example static collection table"
        >
          <TableHeader >
            <TableColumn className='min-w-40'>TODO ID</TableColumn>
            <TableColumn className='min-w-[24rem]'>제목</TableColumn>
            <TableColumn className='min-w-24'>상태</TableColumn>
            <TableColumn className='min-w-24'>처리자</TableColumn>
            <TableColumn className='min-w-40'>수정일시</TableColumn>
          </TableHeader>
          <TableBody emptyContent={"No rows to display."}>
            {itrmList && itrmList.data.map(d => {
              return (
                <TableRow key={d.TODO_ID} onClick={() => {openItem(d.TODO_ID)}}>
                  <TableCell className='py-1 cursor-pointer'>{d.TODO_ID}</TableCell>
                  <TableCell className='py-1 cursor-pointer'>{d.NAME}</TableCell>
                  <TableCell className='py-1 cursor-pointer'>
                    <Chip color={d.PROGRESS === 'S' ? 'success':'warning'} size='sm' variant="flat">
                      {d.PROGRESS === 'S' ? 'Complete' : 'Not yet'}
                    </Chip>
                  </TableCell>
                  <TableCell className='py-1'>{d.UPDATE_ID}</TableCell>
                  <TableCell className='py-1'>{d.UPDATE_DT}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <ItrmItem 
        isOpen={isOpen} 
        onOpenChange={onOpenChange} 
        item={item} 
        isComplete={isComplete} 
        setIsComplete={setIsComplete} 
        handleClose={handleClose}
      />
     
		</div>
  )
}

export default ItrmList;