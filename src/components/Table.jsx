import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Table = () => {
  return (
    <div className='max-w-[1300px] mx-auto '>
      <h1 className='my-12 text-5xl tracking-wide font-medium'>LeaderBoards</h1>
      <div className='table w-[100%] border-gray-300 border-2 p-5 bg-gradient-to-r from-cyan-50 to-amber-50 drop-shadow-lg'>
        <div className='flex justify-between pb-4'>
            <h2 className='text-3xl'>Basic Backtest</h2>
            <div className='flex border-gray-300 border rounded-md'>
                <div className='bg-gray-200 rounded-l-md'>Slippage</div>
                <div>0%<select className='rounded-r-md' name="" id=""></select></div>
            </div>
        </div>
        <div className='record '>
            <div className="table-heading flex font-bold my-2 gap-6">
                <h5 className='w-12'>Rank</h5>
                <h5 className='w-44'>Name</h5>
                <h5 className='w-28'>Calmar Ratio</h5>
                <h5 className='w-32'>Overall Profit</h5>
                <h5 className='w-32'>Avg. Daily Profit</h5>
                <h5 className='w-32'>Win %(Day)</h5>
                <h5 className='w-32'>Price (Rs)</h5>
                <h5 className='w-32'>Action</h5>
            </div>
            <div className='flex gap-6 my-1'>
                <p className='w-12'>1</p>
                <p className='w-44'>Selling with re entr</p>
                <div className='flex w-28'>
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="w-5 h-5 mr-1" style={{width: '20px'}}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"></path></svg>
                    <p>3.96</p>
                </div>
                <p className='w-32'>381845</p>
                <p className='w-32'>319.54</p>
                <p className='w-32'>0.65%</p>
                <p className='w-[136px]'>-</p>
                <button className='items-center underline text-blue-500'>View</button>
            </div>            
            <div className='flex gap-6 my-1'>
                <p className='w-12'>2</p>
                <p className='w-44'>Selling with re entr</p>
                <div className='flex w-28'>
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="w-5 h-5 mr-1" style={{width: '20px'}}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"></path></svg>
                    <p>3.96</p>
                </div>
                <p className='w-32'>381845</p>
                <p className='w-32'>319.54</p>
                <p className='w-32'>0.65%</p>
                <p className='w-[136px]'>-</p>
                <button className='items-center underline text-blue-500'>View</button>
            </div>            
            <div className='flex gap-6 my-1'>
                <p className='w-12'>3</p>
                <p className='w-44'>Selling with re entr</p>
                <div className='flex w-28'>
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="w-5 h-5 mr-1" style={{width: '20px'}}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"></path></svg>
                    <p>3.96</p>
                </div>
                <p className='w-32'>381845</p>
                <p className='w-32'>319.54</p>
                <p className='w-32'>0.65%</p>
                <p className='w-[136px]'>-</p>
                <button className='items-center underline text-blue-500'>View</button>
            </div>            
            <div className='flex gap-6 my-1'>
                <p className='w-12'>4</p>
                <p className='w-44'>Selling with re entr</p>
                <div className='flex w-28'>
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="w-5 h-5 mr-1" style={{width: '20px'}}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"></path></svg>
                    <p>3.96</p>
                </div>
                <p className='w-32'>381845</p>
                <p className='w-32'>319.54</p>
                <p className='w-32'>0.65%</p>
                <p className='w-[136px]'>-</p>
                <button className='items-center underline text-blue-500'>View</button>
            </div>            
            <div className='flex gap-6 my-1'>
                <p className='w-12'>5</p>
                <p className='w-44'>Selling with re entr</p>
                <div className='flex w-28'>
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="w-5 h-5 mr-1" style={{width: '20px'}}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"></path></svg>
                    <p>3.96</p>
                </div>
                <p className='w-32'>381845</p>
                <p className='w-32'>319.54</p>
                <p className='w-32'>0.65%</p>
                <p className='w-[136px]'>-</p>
                <button className='items-center underline text-blue-500'>View</button>
            </div>            
            <div className='flex gap-6 my-1'>
                <p className='w-12'>6</p>
                <p className='w-44'>Selling with re entr</p>
                <div className='flex w-28'>
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="w-5 h-5 mr-1" style={{width: '20px'}}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"></path></svg>
                    <p>3.96</p>
                </div>
                <p className='w-32'>381845</p>
                <p className='w-32'>319.54</p>
                <p className='w-32'>0.65%</p>
                <p className='w-[136px]'>-</p>
                <button className='items-center underline text-blue-500'>View</button>
            </div>            
            <div className='flex gap-6 my-1'>
                <p className='w-12'>7</p>
                <p className='w-44'>Selling with re entr</p>
                <div className='flex w-28'>
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="w-5 h-5 mr-1" style={{width: '20px'}}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"></path></svg>
                    <p>3.96</p>
                </div>
                <p className='w-32'>381845</p>
                <p className='w-32'>319.54</p>
                <p className='w-32'>0.65%</p>
                <p className='w-[136px]'>-</p>
                <button className='items-center underline text-blue-500'>View</button>
            </div>            
            <div className='flex gap-6 my-1'>
                <p className='w-12'>8</p>
                <p className='w-44'>Selling with re entr</p>
                <div className='flex w-28'>
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="w-5 h-5 mr-1" style={{width: '20px'}}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"></path></svg>
                    <p>3.96</p>
                </div>
                <p className='w-32'>381845</p>
                <p className='w-32'>319.54</p>
                <p className='w-32'>0.65%</p>
                <p className='w-[136px]'>-</p>
                <button className='items-center underline text-blue-500'>View</button>
            </div>            
            <div className='flex gap-6 my-1'>
                <p className='w-12'>9</p>
                <p className='w-44'>Selling with re entr</p>
                <div className='flex w-28'>
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="w-5 h-5 mr-1" style={{width: '20px'}}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"></path></svg>
                    <p>3.96</p>
                </div>
                <p className='w-32'>381845</p>
                <p className='w-32'>319.54</p>
                <p className='w-32'>0.65%</p>
                <p className='w-[136px]'>-</p>
                <button className='items-center underline text-blue-500'>View</button>
            </div>            

        </div>
      </div>

    </div>
  )
}

export default Table
