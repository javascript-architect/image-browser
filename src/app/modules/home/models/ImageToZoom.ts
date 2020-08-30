import { Photo } from './Photo';

export interface ImageToZoom {
  photo: Photo;
  activeImage: string;
  activeIndex: number;
  action: 'zoom-in' | 'zoom-out';
}
