import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { Modal, useModal } from ".";
import { ModalProps } from "./types";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";

export default {
  title: "Widgets/Modal",
  component: Modal,
  argTypes: {},
};

const CustomModal: React.FC<ModalProps> = ({ title, onDismiss, ...props }) => (
  <Modal title={title} onDismiss={onDismiss} {...props}>
    <Heading>{title}</Heading>
    <Button>This button Does nothing</Button>
  </Modal>
);

export const Default: React.FC = () => {
  const theme = useTheme();
  const [onPresent1] = useModal(
    <CustomModal p="8px" bodyPadding="0" title="Modal 1" />
  );
  const [onPresent2] = useModal(<CustomModal title="Modal 2" />);
  const [onPresent3] = useModal(<CustomModal title="Modal 3" />);
  return (
    <div>
      <Button onClick={onPresent1}>Open modal 1</Button>
      <Button onClick={onPresent2}>Open modal 2</Button>
      <Button onClick={onPresent3}>Open modal with background</Button>
    </div>
  );
};

export const WithBackground: React.FC = () => {
  const CustomBackgroundModal: React.FC<ModalProps> = ({
    title,
    onDismiss,
  }) => {
    return (
      <Modal
        title={title}
        modalBackground="secondary"
        onDismiss={onDismiss}
        maxWidth="400px"
      >
        Modal body text
      </Modal>
    );
  };

  const [onPresent1] = useModal(
    <CustomBackgroundModal title="Modal with custom background" />
  );
  return <Button onClick={onPresent1}>Modal with custom background</Button>;
};

export const WithCustomWidth: React.FC = () => {
  const CustomWidthModal: React.FC<ModalProps> = ({ title, onDismiss }) => {
    return (
      <Modal title={title} onDismiss={onDismiss} maxWidth="400px">
        Modal body text
      </Modal>
    );
  };

  const [onPresent1] = useModal(
    <CustomWidthModal title="Modal with custom width and test very long title text" />
  );
  return <Button onClick={onPresent1}>Modal with custom width</Button>;
};
//-----------
export const DisableOverlayClick: React.FC = () => {
  const [onPresent1] = useModal(<CustomModal title="Modal 1" />, false);

  return (
    <div>
      <Button onClick={onPresent1}>Disabled overlay click</Button>
    </div>
  );
};

export const WithBackButton: React.FC = () => {
  const BackButtonModal: React.FC<ModalProps> = ({ title, onDismiss }) => {
    const handleOnBack = () => {
      return 1;
    };

    return (
      <Modal
        title={title}
        onDismiss={onDismiss}
        onBack={handleOnBack}
        hideCloseButton
      >
        <Button onClick={onDismiss} variant="text">
          Consumer can still close it.
        </Button>
      </Modal>
    );
  };

  const [onPresent1] = useModal(
    <BackButtonModal title="Modal with no X" />,
    false
  );

  return <Button onClick={onPresent1}>Only Back Button</Button>;
};

export const ReactingToOusideChanges: React.FC = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 500);
    return () => clearInterval(intervalId);
  }, []);
  const ReactiveModal: React.FC<ModalProps & { count: number }> = ({
    title,
    count,
    onDismiss,
  }) => {
    return (
      <Modal title={title} onDismiss={onDismiss}>
        <h2>Counter: {count}</h2>
        <Button mt="8px" onClick={onDismiss}>
          Close
        </Button>
      </Modal>
    );
  };

  const [onPresent1] = useModal(
    <ReactiveModal
      title={`[${counter}] Modal that reacts to outside change`}
      count={counter}
    />,
    true,
    true,
    "reactiveModal"
  );

  const [onPresent2] = useModal(
    <ReactiveModal
      title={`[${counter}] Modal that does NOT react to outside change`}
      count={counter}
    />
  );
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <Button onClick={onPresent1}>Reactive modal</Button>
      <Button ml="16px" onClick={onPresent2}>
        Non-reactive modal
      </Button>
    </div>
  );
};
