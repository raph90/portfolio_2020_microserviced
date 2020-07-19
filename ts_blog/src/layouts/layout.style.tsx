import styled from 'styled-components'

export const ContentDiv = styled.div`
  max-width: 1196px;
  margin: 0 auto;
`

export const MainContentContainer = styled.div`
  width: calc(100% - 36rem);
  margin-left: 36rem;
  background: ${(props: { color: string }) => props.color};
  height: 100%;
`
