import Link from 'next/link';
import React from 'react';

type project = {
   title : string,
   value : number,
   priority : number
}

const ProgressBar = ({ value } : {value : number}) => {
  return (
    <div className="h-1.5 bg-[#5c3d4a] rounded-full mt-2">
      <div
        className="bg-[#e2a66e] h-full rounded-full transition-all duration-300"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

const projects : project[] = [
    {
       title : "protolyze",
       value : 10,
       priority : 0  
    },
    {
       title : "chat",
       value : 5,
       priority : 0   
    },
    {
       title : "stream",
       value : 15,
       priority : 0   
    },
    {
       title : "webrtc",
       value : 20,
       priority : 0   
    },

]


const ProjectProgress = () => {
  return (
    <div className='rounded-xl w-auto p-7 border space-y-4'>
        <h3 className='font-bold text-xl py-3'>
              Progress 
        </h3>

        <div className='space-y-2'>
             {
            projects.map((project,index) => {
                return (
                    <div className='p-2 w-full border rounded-xl'>
                        <div className='flex gap-3'>
                             <p>
                            {index}
                             </p>
                         <h2> 
                              {project.title}
                         </h2>
                        </div>
                        <ProgressBar value={project.value}/>
                    </div>
                )
            })
        }
        </div>

        <Link href={"/projects"} className='underline underline-offset-2 text-blue-400 hover:text-blue-700'>
           {"view more >>" }
        </Link> 
        
    </div>
    
  );
};

export default ProjectProgress;


// {/* <div className="bg-[#3b2b35] text-[#f5d5bd] rounded-xl p-6 w-80 space-y-6 font-sans">
      
//       {/* Daily Average */}
//       <div>
//         <div className="text-sm">Daily Average</div>
//         <div className="text-lg font-semibold">0.1h</div>
//         <ProgressBar value={5} />
//       </div>

//       {/* Peak Day */}
//       <div>
//         <div className="text-sm">Peak Day</div>
//         <div className="text-lg font-semibold">Jul 10</div>
//         <div className="text-xs text-[#e2a66e] flex items-center mt-1">
//           <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20">
//             <path d="M11.3 1L3 10h5l-1 9 8.3-9h-5L11.3 1z" />
//           </svg>
//           Your most productive day
//         </div>
//       </div>

//       {/* Active Days */}
//       <div>
//         <div className="text-sm">Active Days</div>
//         <div className="text-lg font-semibold">3 days</div>
//         <ProgressBar value={10} />
//       </div>

//     </div> 
// */}