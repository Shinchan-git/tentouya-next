import React from 'react'
import { css } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'
import { WorkData } from '../../types/WorkData.type'

type Props = {
  data: WorkData
}

const WorkCard: React.FC<Props> = (props) => {
  return (
    <Link href={`/works/${props.data.workId}`}>
      <a css={cardStyle}>
        <div css={imageContainerStyle}>
          <Image src={props.data.imageUrlA.url} width={400} height={400} layout="responsive" objectFit="cover" />
        </div>
        <p css={titleStyle}>{props.data.title}</p>
        <div css={coverStyle} />
      </a>
    </Link>
  )
}

const cardStyle = css`
  width: 30vw;
  height: 40vw;
  max-width: 300px;
  max-height: 400px;
  margin: 5px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  z-index: 1;
  transform: translate3d(0, 0, 0);
  position: relative;

  @media (max-width: 700px) {
    width: 45vw;
    height: 60vw;
    margin: 2px;
  }

  &:hover{
    cursor: pointer;
  }
`
const imageContainerStyle = css`
  width: 100%;
  height: 75%;
`
const titleStyle = css`
  font-size: 10pt;
  padding: 0 5px;
  text-align: left;
`
const coverStyle = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0);

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`

export default WorkCard