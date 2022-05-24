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
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    margin-top: 24px;
  }
  
  ${({ theme }) => theme.mediaQueries.xll} {
    margin-top: 0;
  }
`


const Audit: FC = () => (
  <AuditedWrap>
    <CerticAuditedIcon 
      style={{
        padding: '8px 16px',
        backgroundColor: "#102648",
        borderRadius: '8px',
        width: '140px'       
      }}
    />
  </AuditedWrap>
)

export default Audit