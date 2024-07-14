import { Card, CardBody, CardHeader, Checkbox } from '@nextui-org/react';
import React from 'react'

export default function TodoList() {
  const list = [
    {
      "id": 1,
      "name": "반드시 해야 할 일",
      "done": "done"
    },
    {
      "id": 2,
      "name": "해야 할 일 두번째",
      "done": ""
    },
  ];
  return (
    <Card className="p-4">
      <CardHeader>
        <div className="flex flex-col">
          <p className="text-lg font-bold">Todo List</p>
          <p className="text-small text-default-500">Manage your tasks</p>
        </div>
      </CardHeader>
      <CardBody>
        {list.map((todo) => (
          <div className="flex mb-2 justify-between" key={todo.id}>
            <div>
              <p>{todo.name}</p>
            </div>

            <div className="flex space-x-1">
              <div className="my-auto">
                <Checkbox
                  isSelected={todo.done}
                  // onChange={() => dispatch(toggleTodo(todo.id))}
                />
              </div>

              {/* <div className="my-auto">
                <BsFillTrashFill
                  className="cursor-pointer text-[18px]"
                  // onClick={() => dispatch(removeTodo(todo.id))}
                />
              </div> */}
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  )
}
