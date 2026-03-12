import Input from "./Input.jsx";
import {useRef} from "react";
import Modal from "./Modal.jsx";

export default function NewProject({onAddProject}) {

  const modal = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
      modal.current.open();
      return;
    }

    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    })
  }

  return <>
    <Modal ref={modal} buttonCaption="Okay">
      <h2>Invalid input</h2>
      <p>Oops... looks like you forgot to enter valid values.</p>
      <p>Please make sure that you entered valus to all fields</p>
    </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4 ">
        <li>
          <button className="text-stone-800 hover:text-stone-950 ">Cancel</button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 "
                  onClick={handleSave}
          >Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={titleRef} label="Title" type="text"/>
        <Input ref={descriptionRef} label="Description" textarea/>
        <Input ref={dueDateRef} label="Due Date" type="date"/>
      </div>
    </div>
  </>
}