import { Card, CardHeader, CardTitle } from '@/components/ui/card'
export default async function Dashboard() {

  return (
    <div className='flex flex-col justify-center items-start flex-wrap px-4 pt-4 gap-4'>
      <Card className='w-[20rem]'>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Welcome
          </CardTitle>
         
        </CardHeader>
       
      </Card>
      
      </div>
    
  )
}