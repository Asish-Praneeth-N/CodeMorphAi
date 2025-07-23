import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Upload } from "@/components/dashboard/upload";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <DashboardLayout>
      <div className="h-full w-full flex items-center justify-center">
        <Upload />
      </div>
    </DashboardLayout>
  );
}