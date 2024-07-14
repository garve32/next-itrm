import { Button, Card, CardBody, CardFooter, CardHeader, Image, Snippet, Spinner, Tab, Tabs, Textarea } from '@nextui-org/react';
import React from 'react'
import TodoList from './TodoList';

export default function Dummy() {
  const sn = `I'm like some kind of supernova

Watch out

Look at me go
재미 좀 볼 빛의 core
So hot, hot
문이 열려 서로의 존재를 느껴
마치 discord
날 닮은 너, 너 누구야? (Drop)

사건은 다가와 ah, oh, ayy
거세게 커져가 ah, oh, ayy
That tick, that tick, tick bomb
That tick, that tick, tick bomb
감히 건드리지 못할 걸 (누구도 말이야)
지금 내 안에선 su-su-su-supernova

Nova
Can't stop hyperstellar
원초 그걸 찾아
Bring the light of a dying star
불러낸 내 우주를 봐 봐
Supernova

Ah, body bang
Make it feel too right

휩쓸린 에너지 it's so special
잔인한 queen 이며 scene 이자 종결
이토록 거대한 내 안의 explosion
내 모든 세포 별로부터 만들어져 (under my control, ah)

질문은 계속돼 ah, oh, ayy
우린 어디서 왔나 oh, ayy
느껴 내 안에선 (ha) su-su-su-supernova

Nova
Can't stop hyperstellar
원초 그걸 찾아
Bring the light of a dying star
불러낸 내 우주를 봐 봐 supernova

보이지 않는 힘으로
네게 손 내밀어 볼까?
가능한 모든 가능성 무한 속의 너를 만나
It's about to bang-bang
Don't forget my name
Su-su-su-supernova

사건은 다가와 ah, oh, ayy
거세게 커져가 ah, oh, ayy
질문은 계속돼 ah, oh, ayy
우린 어디서 왔나 oh, ayy

사건은 다가와 ah, oh, ayy
거세게 커져가 ah, oh, ayy
Tell me, tell me, tell me, oh, ayy
우린 어디서 왔나 oh, ayy
우린 어디서 왔나 oh, ayy

Nova (nova)
Can't stop hyperstellar (hyperstellar)
원초 그걸 찾아
Bring the light of a dying star
불러낸 내 우주를 봐 봐
Super (hey) nova

사건은 다가와 ah, oh, ayy (new star)
거세게 커져가 ah, oh, ayy
질문은 계속돼 ah, oh, ayy (nova)
우린 어디서 왔나 oh, ayy

사건은 다가와 ah, oh, ayy (yeah-yeah-yeah-yeah)
거세게 커져가 ah, oh, ayy (nova)
질문은 계속돼 ah, oh, ayy (bring the light of a dying star)
Supernova`;
  return (
    <>
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="supernova" title="supernova">
          <Card>
            <CardBody>
              <p className='whitespace-pre-wrap'>
                {sn}
              
              </p>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="music" title="Music">
          <TodoList />
        </Tab>
        <Tab key="videos" title="Videos">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
    
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2">
      
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
        <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://nextui.org/images/card-example-4.jpeg"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
        <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://nextui.org/images/card-example-3.jpeg"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
        <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://nextui.org/images/card-example-2.jpeg"
      />
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">New</p>
        <h4 className="text-black font-medium text-2xl">Acme camera</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="https://nextui.org/images/card-example-6.jpeg"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">Available soon.</p>
          <p className="text-black text-tiny">Get notified.</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Notify Me
        </Button>
      </CardFooter>
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
        <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://nextui.org/images/card-example-5.jpeg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          {/* <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src="https://nextui.org/images/breathing-app-icon.jpeg"
          /> */}
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Breathing App</p>
            <p className="text-tiny text-white/60">Get a good night's sleep.</p>
          </div>
        </div>
        <Button radius="full" size="sm">Get App</Button>
      </CardFooter>
    </Card>
  </div>
  </>
  );
}
