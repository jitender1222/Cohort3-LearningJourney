import { useState } from "react";
import { AddContetnModal } from "../Components/AddContentModal";
import { Button } from "../Components/Button";
import { Card } from "../Components/Card";
import { AddIcon } from "../Icons/AddIcon";
import { ShareIcons } from "../Icons/ShareIcons";
import { SideBar } from "../Components/SideBar";

function DashBoard() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="p-2  bg-gray-100 min-h-screen">
      <SideBar />
      <div className="p-2">
        <AddContetnModal
          modal={openModal}
          onClose={() => {
            setOpenModal(false);
          }}
        />
        <div className="flex justify-end gap-2">
          <Button
            variant="primary"
            text="Share Brain"
            startIcon={<ShareIcons />}
          ></Button>
          <Button
            variant="secondary"
            text="Add Content"
            startIcon={<AddIcon />}
            onClick={() => setOpenModal(true)}
          ></Button>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4 ml-72">
          <Card title={"Project Title"} type="youtube" />
          <Card title={"Project Title"} type="twitter" />
          <Card title={"Project Title"} type="youtube" />
          <Card title={"Project Title"} type="twitter" />
          <Card title={"Project Title"} type="youtube" />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
