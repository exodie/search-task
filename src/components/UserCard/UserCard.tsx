import { type FC, useState } from "react";
import "./style.css";

import { type User } from "types/";
import { Modal } from "../Modal";

function extractAndTransform<T>(
  source: Omit<User, "image" | "firstName" | "lastName" | "address">
): { key: string; value: T }[] {
  const extractedData: { key: string; value: T }[] = [];

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      extractedData.push({ key, value: source[key] });
    }
  }

  return extractedData;
}

export const UserCard: FC<User> = (props) => {
  const [modal, setModal] = useState<boolean>(false);

  const data = extractAndTransform(props);

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <div className="userCard">
      <img className="userPic" src={props.image} />
      <div className="userInfo">
        <div>{`${props.firstName} ${props.lastName}`}</div>
        <div>{props.address.city}</div>

        <button onClick={handleOpenModal}>Подробнее</button>
      </div>

      {/* Да, тут праблемс с типизацией, пока не думал как решить */}
      {modal && (
        <Modal title="Подробнее о пользователе" onClose={handleCloseModal}>
          <>
            {data.map((item, index) => (
              <div key={index}>
                <strong>{item.key}:</strong> <pre>{item.value.toString()}</pre>
              </div>
            ))}
          </>
        </Modal>
      )}
    </div>
  );
};
