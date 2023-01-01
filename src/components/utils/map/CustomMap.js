import { useState } from "react";
import Map from "components/utils/map";
import { FormInput } from "components/utils/form/items/FormInput";
import Modal from "components/utils/modal";

export default function CustomMap({ position, setPosition, ...props }) {
  const [visible, setVisible] = useState(false);
  const [newPosition, setNewPosition] = useState(position);
  return (
    <div>
      <FormInput
        label="موقعیت مکانی"
        value={latLongTrim(position)}
        onClick={() => setVisible(true)}
      />
      <Modal
        visible={visible}
        handleCancel={() => setVisible(false)}
        footer={null}
        className="profile-address"
      >
        <Map
          initialPosition={[35.722, 51.333]}
          position={newPosition}
          setPosition={(e) => {
            setNewPosition(e);
            setPosition(e);
          }}
          {...props}
        />
      </Modal>
    </div>
  );
}

const latLongTrim = (data) => {
  const latLong = [];
  for (const field of data) {
    latLong.push(String(field).substring(0, 8));
  }
  return latLong;
};
