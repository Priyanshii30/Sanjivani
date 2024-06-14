import  { FC } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
}

const Image: FC<ImageProps> = ({ src, alt, height, width, className }) => {
  return (
    <img src={src} alt={alt} height={height?height:300} width={width?width:300} className={className} />
  );
}

export default Image;
