import React, { FC } from "react"
import styled from "styled-components"
import { CerticAuditedIcon } from "../../../../components/Svg"

const AuditedWrap = styled.div`
  grid-area: audit;
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  
  ${({ theme }) => theme.mediaQueries.xs} {
    justify-content: flex-end;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
    margin-top: 24px;
  }

  ${({ theme }) => theme.mediaQueries.xll} {
    margin-top: 0;
  }
`
const LinkWrap = styled.a`
  height: fit-content
`

const Audit: FC = () => (
  <AuditedWrap>
    <LinkWrap href='https://www.certik.org/projects/biswap' target="_blank">
      <CerticAuditedIcon 
        style={{
          padding: '8px 16px',
          backgroundColor: "#102648",
          borderRadius: '8px',
          width: '140px'       
        }}
      />
    </LinkWrap>
  </AuditedWrap>
)

export default Audit