import React, { useEffect, useState } from "react";
import { ModalV2, useModal } from ".";
import { ModalProps } from "./types";
import styled, { useTheme } from "styled-components";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import { Text } from "../../components/Text";
import { Box, Flex } from "../../components/Box";
import { BodyText } from "../../components/Typography";
import { ChevronRightIcon } from "../../components/Svg";
import { Modal } from "../Modal";

export default {
  title: "Widgets/ModalV2",
  component: ModalV2,
  argTypes: {},
};

const Wrapper = styled(Flex)`
  gap: 12px;
  flex-wrap: wrap;
  align-content: start;
`;

export const Default: React.FC<ModalProps> = ({ onDismiss, ...props }) => {
  const [onPresentV2] = useModal(
    <ModalV2
      modalHead={
        <Flex alignItems="center">
          <BodyText color="red">Modal title</BodyText>
          <ChevronRightIcon />
        </Flex>
      }
      onDismiss={onDismiss}
      {...props}
    >
      <BodyText mt="24px">Modal body text</BodyText>
    </ModalV2>,
    false
  );
  const [onPresentV2WithTitle] = useModal(
    <ModalV2
      modalHead={
        <Flex alignItems="center">
          <BodyText color="red">Modal title</BodyText>
          <ChevronRightIcon />
        </Flex>
      }
      onDismiss={onDismiss}
      {...props}
    >
      <BodyText pt="24px">Modal body text</BodyText>
    </ModalV2>
  );
  const [onPresentV2WithoutTitle] = useModal(
    <ModalV2 onDismiss={onDismiss} {...props}>
      <BodyText>Modal body text</BodyText>
    </ModalV2>
  );
  const [onPresentV2WithBackground] = useModal(
    <ModalV2
      modalHead={
        <Flex alignItems="center">
          <BodyText color="red">Modal title with background</BodyText>
          <ChevronRightIcon />
        </Flex>
      }
      onDismiss={onDismiss}
      modalBackground="pastelBlue"
      {...props}
    >
      <BodyText pt="24px" color="primary">
        Modal body text with background
      </BodyText>
    </ModalV2>
  );
  const [onPresentV2WithBackgroundImage] = useModal(
    <ModalV2
      modalHead={
        <Flex alignItems="center">
          <BodyText color="red">Modal title with background</BodyText>
          <ChevronRightIcon />
        </Flex>
      }
      closeBtnColor="secondary"
      onDismiss={onDismiss}
      modalBackground="https://static.biswap.org/bs/incentiveProgram/rocket@2x.png"
      {...props}
    >
      <BodyText pt="24px" color="white">
        Modal body text with background
      </BodyText>
      <BodyText pt="24px" color="white">
        Modal body text with background
      </BodyText>
    </ModalV2>
  );
  const [onPresentV2WithImage] = useModal(
    <ModalV2
      closeBtnColor="white"
      onDismiss={onDismiss}
      {...props}
      withoutBodyPadding
      modalBackground="transparent"
    >
      <img
        src="https://static.biswap.org/bs/localization/localeModalInfoImg@2x.jpg"
        style={{ display: "block" }}
        width="100%"
        height="auto"
        alt=""
      />
      <Box p="32px" pt="0" background="white">
        <BodyText pt="24px" color="gray700">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum
        </BodyText>
        <Button
          variant="primary"
          scale="xl"
          mt="24px"
          onClick={onDismiss}
          width="100%"
        >
          Close
        </Button>
      </Box>
    </ModalV2>
  );
  const [onPresentV2WithInnerPages] = useModal(
    <ModalV2
      closeBtnColor="white"
      onDismiss={onDismiss}
      {...props}
      withoutBodyPadding
      modalBackground="transparent"
    >
      <img
        src="https://static.biswap.org/bs/localization/localeModalInfoImg@2x.jpg"
        style={{ display: "block" }}
        width="100%"
        height="auto"
        alt=""
      />
      <Box p="32px" pt="0" background="white">
        <BodyText pt="24px" color="gray700">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum
        </BodyText>
        <Button
          variant="primary"
          scale="xl"
          mt="24px"
          onClick={onDismiss}
          width="100%"
        >
          Close
        </Button>
      </Box>
    </ModalV2>
  );

  return (
    <Wrapper background="#071C3C" minHeight="100vh" p="24px">
      <Button variant="warning" onClick={onPresentV2}>
        modal, close overlay false
      </Button>
      <Button variant="warning" onClick={onPresentV2WithTitle}>
        modal with title
      </Button>
      <Button variant="warning" onClick={onPresentV2WithoutTitle}>
        modal without title
      </Button>

      <Button variant="warning" onClick={onPresentV2WithBackground}>
        modal with background
      </Button>
      <Button variant="warning" onClick={onPresentV2WithBackgroundImage}>
        modal with background image
      </Button>
      <Button variant="warning" onClick={onPresentV2WithImage}>
        modal with image
      </Button>
      <Button variant="warning" onClick={onPresentV2WithInnerPages}>
        modal with inner pages
      </Button>
    </Wrapper>
  );
};
