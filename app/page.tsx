"use server"
import  DialogDemo  from '@/components/Modal'
import { getUserListAction } from '@/action/userAction';
import DisplayData from '@/components/DisplayData';
import Nav from '@/components/Nav';
import { auth } from '@clerk/nextjs/server';

export default async function Home() {
  const {userId} = await auth();
  console.log(userId)
  const users = await getUserListAction(userId);

  return (
    <main className="container mx-auto p-4">
      <Nav />
       <DialogDemo textButton="Add User" userId={userId} />
       <DisplayData data={users} />
       <div>
       </div>
       
    </main>
  )
}
