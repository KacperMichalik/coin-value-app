import styled from 'styled-components'

export const ModuleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  width: 100%;
  @media ${({ theme }) => theme.device.laptopL} {
    grid-gap: 16px;
  }
  @media ${({ theme }) => theme.device.laptopM} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: 1fr;
  }
`
