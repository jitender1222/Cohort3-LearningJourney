import { useState } from "react";
import { AddContetnModal } from "./Components/AddContentModal";
import { Button } from "./Components/Button";
import { Card } from "./Components/Card";
import { AddIcon } from "./Icons/AddIcon";
import { ShareIcons } from "./Icons/ShareIcons";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
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
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <Card title={"Project Title"} type="youtube" />
        <Card title={"Project Title"} type="twitter" />
        <Card title={"Project Title"} type="youtube" />
        <Card title={"Project Title"} type="twitter" />
        <Card title={"Project Title"} type="youtube" />
      </div>
    </div>
  );
}

export default App;
