import React from 'react'
import { css } from '@emotion/react'
import Title from '../ui/Title'
import Spacer from '../ui/Spacer'
import BackNavigation from '../ui/BackNavigation'
import WorkCard from '../ui/WorkCard'
import SectionContainer from '../ui/SectionConteiner'
import { WorkData } from '../../types/WorkData.type'

type Props = {
  worksData: WorkData[]
}

const WorksPage: React.FC<Props> = (props) => {
  return (
    <div css={layoutStyle}>
      <BackNavigation text="トップ" link="/" />

      <SectionContainer padding={0}>
        <Title text="グッズ一覧" />
        <Spacer y={10} />

        <div css={cardContainerStyle}>
          {props.worksData.map((data, index) => (
            <WorkCard data={data} key={index} />
          ))}
        </div>

      </SectionContainer>
    </div>
  )
}

const layoutStyle = css`
  min-height: 100vh;
`
const cardContainerStyle = css`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default WorksPage