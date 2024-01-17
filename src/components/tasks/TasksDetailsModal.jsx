/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import Modal from "../ui/Modal";

const TasksDetailsModal = ({ isOpen, setIsOpen, id }) => {
    const { tasks } = useSelector((state) => state.taskSlice);
    const task = tasks.find((item) => item.id === id);
    console.log(task);
    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title}>
            {task?.description}
            </Modal>
        </div>
    );
};

export default TasksDetailsModal;