import React from 'react'

function StudentIdeaItems(props) {

    return (
        <div className='w-[100%] h-[10vh] flex l justify-between items-center px-[20px] border-b-[2px] border-gray-200 flex-none hover:bg-blue-50 transition duration-300'>
            <div className='flex gap-x-[0.5rem]'>
            <p className='text-[1.2rem]  font-semibold'>{props.number} : </p>
            <p className='text-[1.2rem]  font-semibold'>{props.title}</p>
            <div className='w-fit h-[30px] px-[5px] rounded-lg flex justify-center items-center text-white font-semibold' style={{
                    backgroundColor:
                        props.status === 'rejected' ? 'red' :
                            props.status === 'approved' ? 'green' :
                                props.status === 'pending' ? 'orange' : 'gray'
                }}>
                    {props.status}
                </div>
            </div>



            <div className='flex justify-between items-center gap-x-[0.5rem]'>

                <button className='h-[40px] px-[10px] rounded-[10px] bg-blue-600 text-white ' onClick={props.showDetailsFN}>Details</button>
            </div>


        </div>
    )
}

export default StudentIdeaItems
