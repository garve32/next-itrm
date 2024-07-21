import { Button, Card, CardBody, CardFooter, CardHeader, Input } from '@nextui-org/react'
import React from 'react'

export default function SignIn() {
  return (
    <Card>
      <CardHeader>

      </CardHeader>
      <CardBody>
        <Input
          autoFocus
          // endContent={
          //   <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          // }
          label="Email"
          placeholder="Enter your email"
          variant="bordered"
        />
        
      </CardBody>
      <CardFooter>
        <div className="flex py-2 px-1 justify-between">
          <Button color="primary">
            Sign in
          </Button>
        </div>
      </CardFooter>
    </Card>

  )
}
