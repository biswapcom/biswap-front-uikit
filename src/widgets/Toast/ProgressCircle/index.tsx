import React, { FC, useEffect, useState } from 'react'
import styled from "styled-components";
import {CloseIcon} from "../../../components/Svg";

interface IProps {
  filled?: number
  notFilled?: number
    onClick: any
}

const SvgDiag = styled.svg`
  position: relative;
  top: -10px;
  left: -25%;
  width: 43px;
  height: 42px;
  overflow: visible;
`

const Content = styled.g`
  fill: #000;
  transform: translate(49%, 25%);
`

const StyledButton = styled.button`
    background-color: transparent;
  border: none;
  cursor: pointer;
`

const ProgressCircle: FC<IProps> = ({ filled = 0, notFilled = 100, onClick }) => {
  const [percentToDisplay, setPercentToDisplay] = useState<string>('0 100')

  useEffect(() => {
    setPercentToDisplay(`${Number(filled).toFixed()} ${Number(notFilled).toFixed()}`)
  }, [filled, notFilled])

  return (
      <StyledButton onClick={onClick}>
          <SvgDiag viewBox="0 0 42 42">
              <circle cx="31" cy="31" r="15.91549430918954" fill="transparent" />
              <circle
                  cx="30"
                  cy="31"
                  r="15.91549430918954"
                  fill="transparent"
                  stroke="url(#diag-color)"
                  strokeWidth="1"
                  strokeDasharray="100 0"
                  strokeDashoffset="0"
              />
              <circle
                  className="diag-circle"
                  cx="30"
                  cy="31"
                  r="15.91549430918954"
                  fill="transparent"
                  stroke='#1DC872'
                  strokeWidth="1"
                  strokeDasharray={percentToDisplay}
                  strokeDashoffset="25"
                  strokeLinecap="round"
              />
              <defs>
                  <linearGradient id="diag-color" x1="4.653" y1="13.461" x2="13.086" y2="0.7" gradientUnits="userSpaceOnUse">
                      <stop stopColor="rgba(196, 196, 196, 0.3)" />
                  </linearGradient>
              </defs>
              <Content>
                  <CloseIcon width="20px" color="currentColor" />
              </Content>
          </SvgDiag>
      </StyledButton>
  )
}

export default ProgressCircle
