import React, { FC } from "react"
import styled from "styled-components";

export default {
  title: "Components/GridSystem",
  // component: GridSystem,
  argTypes: {},
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 8px;

  //max-width: 1200px;
  margin: 0 auto 24px;
`
const Column = styled.div`
  background: indianred;
  padding: 12px;
`
const ColumnCustom = styled.div`
  grid-column: span 4;
  background: cadetblue;
  padding: 12px;
  
  ${({ theme }) => theme.mediaQueries.xxl} {
    grid-column: span 3;
  }
`

const Wrapper2 = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-column-gap: 8px;

  max-width: 1604px;
  margin: 0 auto 24px;
`

const Column2 = styled.div`
  background: cadetblue;
  padding: 12px;
`

export const Default:FC = ():JSX.Element => {
  return (
    <>
      <Wrapper>
        <Column>1</Column>
        <Column>2</Column>
        <Column>3</Column>
        <Column>4</Column>
        <Column>5</Column>
        <Column>6</Column>
        <Column>7</Column>
        <Column>8</Column>
        <Column>9</Column>
        <Column>10</Column>
        <Column>11</Column>
        <Column>12</Column>
      </Wrapper>

      <Wrapper>
        <ColumnCustom>1</ColumnCustom>
        <ColumnCustom>2</ColumnCustom>
        <ColumnCustom>3</ColumnCustom>
        <ColumnCustom>4</ColumnCustom>
      </Wrapper>



      {/*<Wrapper2>*/}
      {/*  <Column2>1</Column2>*/}
      {/*  <Column2>2</Column2>*/}
      {/*  <Column2>3</Column2>*/}
      {/*  <Column2>4</Column2>*/}
      {/*  <Column2>5</Column2>*/}
      {/*  <Column2>6</Column2>*/}
      {/*  <Column2>7</Column2>*/}
      {/*  <Column2>8</Column2>*/}
      {/*  <Column2>9</Column2>*/}
      {/*  <Column2>10</Column2>*/}
      {/*  <Column2>11</Column2>*/}
      {/*  <Column2>12</Column2>*/}
      {/*  <Column2>13</Column2>*/}
      {/*  <Column2>14</Column2>*/}
      {/*  <Column2>15</Column2>*/}
      {/*  <Column2>16</Column2>*/}
      {/*</Wrapper2>*/}
    </>
  )
}