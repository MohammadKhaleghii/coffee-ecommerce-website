export interface SliderProps {
  slider: SliderItem[];
}
interface SliderItem {
  id: number;
  title: string;
  sliderPath: string;
  sliderHref: string;
}