import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addTask(data));
    reset();
  };

  const onCancel = () => {  
    reset();
    setIsOpen(false);
  }
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Add New Task"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Title
          </label>
          <input
            className="w-full rounded-md"
            type="text"
            {...register("title")}
            id="title"
            defaultValue={"Ibrahim"}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Description
          </label>
          <textarea
            className="w-full rounded-md"
            type="text"
            {...register("description")}
            id="description"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Deadline
          </label>
          <input
            className="w-full rounded-md"
            type="date"
            {...register("date")}
            id="date"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Assign to
          </label>
          <select
            className="w-full rounded-md"
            {...register("assignedTo")}
            id="assignedTo"
          >
            <option value="Abid Faruk">Abid Faruk</option>
            <option value="Sultan Md Ayman">Sultan Md Ayman</option>
            <option value="Md. Hosen Zisad">Md. Hosen Zisad</option>
            <option value="Md. Hasan Zisan">Md. Hasan Zisan</option>
            <option value="Mohammad Dihan">Mohammad Dihan</option>
            <option value="Mynul Hasan">Mynul Hasan</option>
            <option value="Md. Ibrahim Siddiquee">Md. Ibrahim Siddiquee</option>
            <option value="Shahidul Chowdhury Sohel">
              Shahidul Chowdhury Sohel
            </option>
          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Priority
          </label>
          <select
            className="w-full rounded-md"
            {...register("priority")}
            id="priority"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="flex gap-3 justify-between">
          <button className="btn btn-primary my-2" type="submit">
            Add
          </button>
          <button onClick={() => onCancel()} className="btn btn-danger my-2" type="button">
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
