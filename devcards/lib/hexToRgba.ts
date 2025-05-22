export * from './hexToRgba';

export const hexToRgba = (hex: string, alpha: number): string => {
   const sanitizedHex = hex.replace('#', '');
   const bigint = parseInt(sanitizedHex, 16);
   const r = (bigint >> 16) & 255;
   const g = (bigint >> 8) & 255;
   const b = bigint & 255;

   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
