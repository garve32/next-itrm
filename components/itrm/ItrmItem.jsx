import { Button, Divider, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Switch, Textarea } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { CheckIcon } from './CheckIcon';
import { XmarkIcon } from './XmarkIcon';
import { saveTodoActItem } from '@/api';

export default function ItrmItem( props ) {

  const {isOpen, onOpenChange, item, isComplete, setIsComplete, handleClose} = props;
  // const {TODO_ID, PROGRESS} = itrmItem;
  // const [isSelected, setIsSelected] = useState(isComplete);
  const [saveReq, setSaveReq] = useState(
    // itrmItem
    {
    TODO_ID: item.TODO_ID,
    TODO_DT: item.TODO_DT,
    PROGRESS: item.PROGRESS,
    DESCRIPTION: item.DESCRIPTION,
    // UPDATE_ID: itrmItem.USER_ID
    }
  );

// const [saveReq, setSaveReq] = useState(itrmItem);

  const setToggle = (e) => {
    setIsComplete(e);
    // setSaveReq(itrmItem);
    // setIsCompl
    // const progress = PROGRESS =='S'?true:false;
    // console.log(progress)
    // setIsSelected(e)
    // console.log(TODO_ID)
    let progress = e?'S':null
    // setEnabled(e)
    console.log('setToggle');
    console.log(saveReq);
    setSaveReq(saveReq => ({
        ...saveReq,
        PROGRESS: progress})
    );
    //enabled = e
  }
  
  const saveItrm = () => {
    console.log('저장 API 날리기');
    console.log(item.TODO_ID);
    console.log(saveReq);
    setSaveReq((prev) => ({
      TODO_ID: item.TODO_ID,
      TODO_DT: item.TODO_DT,
      
    }));
    // setSaveReq(itrmItem);
    handleSave();
    // console.log(saveReq)
    // console.log('saveReq.TODO_ID = ' + saveReq.TODO_ID);
    // console.log('saveReq.TODO_DT = ' + saveReq.TODO_DT);
    // console.log('saveReq.PROGRESS = ' + saveReq.PROGRESS);
    // console.log('saveReq.DESCRIPTION = ' + saveReq.DESCRIPTION);
    // console.log('saveReq.UPDATE_ID = ' + saveReq.UPDATE_ID);
    // const params = {TODO_DT: selDate, TODO_ID: todoId, PROGRESS: '', DESCRIPTION: '', UPDATE_ID: ''}
    // closeHandler();
  }

  const handleChangeDescription = (e) => {
    console.log('handleChangeDescription');
    setSaveReq(saveReq => ({
        ...saveReq,
        DESCRIPTION: e.target.value})
    );
  };

  const handleSave = async () => {
    await saveTodoActItem(saveReq).then((response) => {
      if(response.status !== 200) {
        console.log(response.data.message)
        alert(response.data.message)
      } else {
        closeModal()
      }
    }).catch((err) => {
      console.error('Error:', err)
      alert(err.response.data.message)
    });
  }

  const ttt = async () => {
    // console.log(saveReq)
    const params = saveReq;
    await saveTodoActItem(params)
  }

  const onModalClose = () => {
    console.log('모달 클로즈');
    handleClose();
  }

  return (
    <Modal size='3xl' isOpen={isOpen} onOpenChange={onOpenChange} onClose={onModalClose}>
        <ModalContent>
          {(onModalClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 ">{item.NAME}</ModalHeader>
              <Divider />
              <ModalBody>
                {/* {saveReq.TODO_ID} */}
                <p className="font-bold ">점검 사항</p>
                <p className='min-h-32 text-sm'>
                  {/* {itrmItem.MI_DESC} */}
                  {item.MI_DESC.split("\n").map((line) => {
                                            return (
                                            <span key={line}>
                                                {line}
                                                <br />
                                            </span>
                                            );
                                        })}
                </p>
                <p className="font-bold ">점검 결과</p>
                <Textarea
                  variant='bordered'
                  minRows={3}
                  placeholder="점검 결과를 입력하세요."
                  onChange={handleChangeDescription}
                />
              </ModalBody>
              <Divider />
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onModalClose} size='sm'>
                  Close
                </Button>
                <Switch
                  defaultChecked={isComplete}
                  // isSelected={isSelected} onValueChange={setIsSelected}
                  // isSelected={isComplete} 
                  // onValueChange={(e) => setToggle(e)}
                  // onChange={(e) => setToggle(e)}
                  isSelected={isComplete}
                  onValueChange={(e) => setToggle(e)}
                  size="lg"
                  color="primary"
                  startContent={<CheckIcon />}
                  endContent={<XmarkIcon />}
                >
                </Switch>
                <Button color="primary" onPress={() => saveItrm(onModalClose)} size='sm'>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
  )
}