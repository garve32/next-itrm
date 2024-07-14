import { Button, Divider, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Switch, Textarea } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { CheckIcon } from './CheckIcon';
import { XmarkIcon } from './XmarkIcon';

export default function ItrmItem({isOpen, onOpenChange, itrmItem}) {

  const [isSelected, setIsSelected] = useState(true)

  const saveItrm = async (closeHandler) => {
    console.log('저장 API 날리기');
    closeHandler();
  }

  return (
    <Modal size='2xl' isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 ">{itrmItem.NAME}</ModalHeader>
              <Divider />
              <ModalBody>
                <p className="font-bold ">확인 사항</p>
                <p className='min-h-32'>
                  {itrmItem.MI_DESC}
                </p>
                <Textarea
                  variant='bordered'
                  minRows={3}
                  // labelPlacement='inside'
                  // label="점검 결과"
                  placeholder="점검 결과를 입력하세요."
                />
              </ModalBody>
              <Divider />
              <ModalFooter>
                {/* <Button color="danger" variant="light" onPress={onClose} size='sm'>
                  Close
                </Button> */}
                <Switch
                  isSelected={isSelected} onValueChange={setIsSelected}
                  size="md"
                  color="primary"
                  startContent={<CheckIcon />}
                  endContent={<XmarkIcon />}
                >
                </Switch>
                <Button color="primary" onPress={() => saveItrm(onClose)} size='sm'>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
  )
}