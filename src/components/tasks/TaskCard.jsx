/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { removeTask, updateTask } from "./taskSlice";

const TaskCard = ({task}) => {
    const dispatch = useDispatch();
    console.log(task);
    let updatedStatus;
    if(task.status === 'pending'){
      updatedStatus = 'running';
    }
    else if(task.status === 'running'){
       updatedStatus = 'done';
    } 
    else{
      updatedStatus= 'archived';
    }
    // const task = {
    //   id: 1,
    //   status: 'pending',
    //   title: 'Remove Button',
    //   description:
    //     'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
    //   date: '2023-08-28',
    //   assignedTo: 'Mir Hussain',
    //   priority: 'high',
    // };
  
  
    return (
        <div className="bg-secondary/10 rounded-md p-5">
        <h1
          className={`text-lg font-semibold mb-3  ${
            task?.priority === 'hard' ? 'text-red-500' : ''
          } ${task?.priority === 'medium' ? 'text-yellow-500' : ''} ${
            task?.priority === 'easy' ? 'text-green-500' : ''
          }`}
        >
          {task?.title}
        </h1>
        <p className="mb-3">{task?.description}</p>
        <p className="text-sm">Assigned to - {task?.name}</p>
        <div className="flex justify-between mt-3">
          <p>{task?.dateline}</p>
          <div className="flex gap-3">
            <button onClick={()=> dispatch(removeTask(task?.id))} title="Delete">
              <TrashIcon className="h-5 w-5 text-red-500" />
            </button>
            <button onClick={()=> dispatch(updateTask({id:task?.id, status: updatedStatus}))}  title="Update Status"
            >
              <ArrowRightIcon className="h-5 w-5 text-primary" />
            </button>
          </div>
        </div>
      </div>  
    );
};

export default TaskCard;