import React, { useEffect, useState } from "react";
import { Modal, useModal } from ".";
import { ModalProps } from "./types";
import {useTheme} from "styled-components";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import {Text} from "../../components/Text";

export default {
  title: "Widgets/ModalV2",
  component: Modal,
  argTypes: {},
};

const CustomModal: React.FC<ModalProps> = ({ title, onDismiss, ...props }) => (
  <Modal title={title} onDismiss={onDismiss} {...props}>
    <Heading>{title}</Heading>
    <Text>closeOnOverlayClick</Text>
    <Button>This button Does nothing</Button>
  </Modal>
);

export const Default: React.FC = () => {
  // const theme = useTheme();
  const [onPresentV2] = useModal(
    <CustomModal p="8px" bodyPadding="0" title="Modal 1" />,
    false
  );
  return (
    <div>
      <Button onClick={onPresentV2}>Open modal 1</Button>
    </div>
  );
};