import { Button, Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell, getKeyValue, Calendar, useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Spacer, Chip} from "@nextui-org/react";
import styles from './ItrmList.module.css';
import { useEffect, useState } from "react";
import ItrmItem from "./ItrmItem";
import { fetchMockItem, fetchMockList } from "@/api";
import ItrmCal from "../calendar/ItrmCal";
import SystemLink from "../widgets/SystemLink";

function ItrmList() {

  const [itrmList, setItrmList] = useState(null);
  const [item, setItem] = useState(null);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const getList = async(paramDt) => {
    const params = {TODO_DT: paramDt, TEAM_ID: 'teamId', USER_ID: 'userId'}
    console.log(params);
    const response = await fetchMockList(params);
    setItrmList(response.data);
  }

  const getItem = async(todoId) => {
    const {data} = await fetchMockItem(todoId);
    setItem(data[0]);
    onOpen();
  }

  return (
    <div className="flex flex-row text-small">
      
      <div className="flex flex-col">
        <ItrmCal handler={getList}/>
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
            <TableColumn>처리자</TableColumn>
            <TableColumn className='min-w-40'>수정일시</TableColumn>
          </TableHeader>
          <TableBody emptyContent={"No rows to display."}>
            {itrmList && itrmList.data.map(d => {
              return (
                <TableRow key={d.TODO_ID} onClick={() => {getItem(d.TODO_ID)}}>
                  <TableCell className='py-1 cursor-pointer'>{d.TODO_ID}</TableCell>
                  <TableCell className='py-1 cursor-pointer'>{d.NAME}</TableCell>
                  <TableCell className='py-1 cursor-pointer'>{d.PROGRESS}<Chip color="success" size='sm' variant="flat">Success</Chip></TableCell>
                  <TableCell className='py-1'>{d.UPDATE_ID}</TableCell>
                  <TableCell className='py-1'>{d.UPDATE_DT}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <ItrmItem isOpen={isOpen} onOpenChange={onOpenChange} itrmItem={item}/>
     
		</div>
  )
}

export default ItrmList;