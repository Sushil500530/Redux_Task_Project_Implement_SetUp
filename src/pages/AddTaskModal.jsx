/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";
import Modal from "../components/ui/Modal";

const AddTaskModal = ({isOpen,setIsOpen}) => {
    const { register, handleSubmit, reset } = useForm();
    // const dispatch = useDispatch();

    const onSubmit = (data) => {
        console.log(data);
        // dispatch(addTask(data))
        handleCancel();
    };
    const handleCancel = () => {
        reset();
        setIsOpen(false);
    }
    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Your Task" >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-3">
                        <div className="flex flex-col gap-3">
                            <label className="text-xl font-bold" htmlFor="title">Title*</label>
                            <input type="text" name="title" {...register('title')} className="w-full rounded-md" required />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-xl font-bold" htmlFor="description">Description*</label>
                            <textarea name="description" {...register('description')} ></textarea>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-xl font-bold" htmlFor="dateline">Dateline*</label>
                            <input type="date" name="dateline" {...register('dateline')} className="w-full rounded-md" required />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-xl font-bold" htmlFor="title">Assign to*</label>
                            <input type="text" name="name" {...register('name')} className="w-full rounded-md" required />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-xl font-bold" htmlFor="priority">Priority*</label>
                            <select name="priority" id="" {...register('priority')} className="w-full rounded-md">
                                <option defaultValue="select priority" className="select-text" disabled >Select Priority....</option>
                                <option value="hard">Hard</option>
                                <option value="medium">Medium</option>
                                <option value="easy">Easy</option>
                            </select>
                        </div>
                        <div className="flex items-end justify-end mt-3 gap-3">
                            <button onClick={handleCancel} className="btn btn-danger">Cancel</button>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>

            </Modal>

        </div>
    );
};

export default AddTaskModal;