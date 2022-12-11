import { useState } from "react";
import { InputComponentDefault } from "../components/InputComponent";
import { LabelInputComponent } from "../components/LabelInputComponent";

export function TextInput({ value, onChange, deleteItem }) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <LabelInputComponent
        title="Text"
        show={show}
        setShow={setShow}
        deleteItem={deleteItem}
      />
      <div
        className={`overflow-hidden duration-150 ${show ? "h-full" : "h-0"}`}
      >
        <div className="grid grid-cols-4 gap-4">
          <InputComponentDefault
            id="top"
            title="Top"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
          <InputComponentDefault
            id="right"
            title="Right"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
          <InputComponentDefault
            id="bottom"
            title="Bottom"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
          <InputComponentDefault
            id="left"
            title="Left"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <InputComponentDefault
            id="width"
            title="Width"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
          <InputComponentDefault
            id="height"
            title="Height"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <InputComponentDefault
            id="groupColor"
            title="Color"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <InputComponentDefault
            id="fontSize"
            title="Font Size"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
          <InputComponentDefault
            id="textAlign"
            title="Text Align"
            type="text"
            onChange={() => {}}
            placeholder=""
            required={true}
          />
          <InputComponentDefault
            id="fontWeight"
            title="Font Weight"
            type="text"
            onChange={() => {}}
            placeholder=""
            required={true}
          />
          <InputComponentDefault
            id="fontFamily"
            title="Font Family"
            type="text"
            onChange={() => {}}
            placeholder=""
            required={true}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="cols-span-2">
            <InputComponentDefault
              id="text"
              title="Text"
              type="text"
              onChange={() => {}}
              placeholder=""
              required={true}
            />
          </div>
          <InputComponentDefault
            id="textController"
            title="Editing Controller"
            type="number"
            onChange={() => {}}
            placeholder=""
            required={true}
          />
        </div>
      </div>
    </div>
  );
}
