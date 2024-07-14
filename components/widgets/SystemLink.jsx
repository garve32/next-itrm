import { Card, CardBody, CardFooter, CardHeader, Divider, Image, Link } from '@nextui-org/react'
import React from 'react'

export default function SystemLink() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">NextUI</p>

            <Link
            className='text-xs'
            isExternal
            showAnchorIcon
            href="https://github.com/nextui-org/nextui"
            >
            Visit source code on GitHub.
          </Link>
        </div>
      </CardHeader>
      <Divider/>
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Site 2</p>

            <Link
            className='text-xs'
            isExternal
            showAnchorIcon
            href="https://github.com/nextui-org/nextui"
            >
            Visit site2.
          </Link>
        </div>
      </CardHeader>
      <Divider/>
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Site 3</p>

            <Link
            className='text-xs'
            isExternal
            showAnchorIcon
            href="https://github.com/nextui-org/nextui"
            >
            Visit site3.
          </Link>
        </div>
      </CardHeader>
      <Divider/>
      <CardFooter className="flex gap-3">
      <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Site 4</p>

            <Link
            className='text-xs'
            isExternal
            showAnchorIcon
            href="https://github.com/nextui-org/nextui"
            >
            Visit site4.
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
