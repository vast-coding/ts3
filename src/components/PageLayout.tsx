import { Header, Text } from 'components'
import React, { ReactNode } from 'react'

import styled from 'styled-components'

const Content = styled.main`
  max-width: 800px;
  margin: 80px auto 0 auto;
  padding: 0 16px;
  color: ${(props) => props.theme.greys[7]};
`
type TPageLayoutProps = { children: ReactNode }

export function PageLayout({ children }: TPageLayoutProps) {
  return (
    <>
      <Header></Header>
      <Content>{children}</Content>
      <Text></Text>
    </>
  )
}
