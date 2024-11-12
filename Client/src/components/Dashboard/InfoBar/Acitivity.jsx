import React from 'react'

const Acitivity = () => {
    const activityDetails = [
        {
            task: 'Send Money to Address'
        },
        {
            task: 'stack 1.25 Token'
        }
    ]
  return (
    <div className='ml-5 flex flex-col gap-8 mr-5'>
        {
            activityDetails.map((activity,index) => (
                <div className={`flex items-center justify-start gap-4`}>
                    <div className='text-xl font-bold '>{`${index} )`}</div>
                    <div className='text-xl font-bold '>{activity.task}</div>
                </div>
            ))
        }
    </div>
  )
}

export default Acitivity