import Image from 'next/image';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ImageResponsive = (props: any) => (
  <Image alt={props.alt} layout="responsive" priority {...props} />
);
