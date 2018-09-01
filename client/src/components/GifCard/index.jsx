import React from 'react';
import { GifCardWrapper } from "./GifCard.style";

export const GifCard = ({ src }) => {
  return (
    <GifCardWrapper>
      <img alt={'gif'} src={src} />
    </GifCardWrapper>
  )
};

export default GifCard;
