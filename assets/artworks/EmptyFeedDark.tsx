import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}

const EmptyFeedDark = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width={260} height={253.792} {...props}>
    <Path
      d="M165.059 57.077H95a6.029 6.029 0 0 0-6.022 6.022v155.706l-.803.245-17.186 5.263a3.214 3.214 0 0 1-4.011-2.132L15.856 55.194a3.213 3.213 0 0 1 2.132-4.011l26.484-8.109 76.779-23.501 26.484-8.109a3.208 3.208 0 0 1 4.011 2.128l13.068 42.683Z"
      fill="#444"
    />
    <Path
      d="M180.346 56.274 164.597 4.831a6.822 6.822 0 0 0-8.523-4.528L118.839 11.7 42.064 35.205 4.829 46.606a6.831 6.831 0 0 0-4.528 8.523L54.129 230.94a6.836 6.836 0 0 0 6.528 4.83 6.741 6.741 0 0 0 1.995-.301l25.525-7.812.803-.249v-.839l-.803.245-25.762 7.889a6.028 6.028 0 0 1-7.519-3.995L1.07 54.893a6.014 6.014 0 0 1 3.995-7.519L42.3 35.973l76.775-23.501L156.31 1.071a6.085 6.085 0 0 1 1.77-.265 6.028 6.028 0 0 1 5.749 4.259l15.677 51.21.249.803h.835Z"
      fill="#3f3d56"
    />
    <Path
      d="M49.251 51.315a3.62 3.62 0 0 1-3.457-2.556l-5.171-16.89a3.613 3.613 0 0 1 2.397-4.512l70.633-21.625a3.617 3.617 0 0 1 4.512 2.397l5.171 16.89a3.617 3.617 0 0 1-2.397 4.513L50.306 51.156a3.604 3.604 0 0 1-1.056.159Z"
      fill="#ff6e4d"
    />
    <Path
      fill="#ff6e4d"
      d="M84.368 10.018a8.029 8.029 0 0 1-8.029 8.029 8.029 8.029 0 0 1-8.029-8.029 8.029 8.029 0 0 1 16.058 0z"
    />
    <Path
      fill="#3f3d56"
      d="M81.423 10.018a5.084 5.084 0 0 1-5.084 5.085 5.084 5.084 0 0 1-5.084-5.085 5.084 5.084 0 0 1 10.168 0z"
    />
    <Path
      d="M241.934 233.72H106.241a3.416 3.416 0 0 1-3.412-3.412V67.717a3.416 3.416 0 0 1 3.412-3.412h135.693a3.416 3.416 0 0 1 3.412 3.412v162.591a3.416 3.416 0 0 1-3.412 3.412Z"
      fill="#444"
    />
    <Path
      d="M179.507 56.274H95a6.834 6.834 0 0 0-6.825 6.825v163.715l.803-.245V63.099A6.029 6.029 0 0 1 95 57.077h84.756Zm73.668 0H95a6.834 6.834 0 0 0-6.825 6.825v183.869A6.834 6.834 0 0 0 95 253.793h158.175a6.834 6.834 0 0 0 6.825-6.825V63.099a6.834 6.834 0 0 0-6.825-6.825Zm6.022 190.693a6.029 6.029 0 0 1-6.022 6.022H95a6.029 6.029 0 0 1-6.022-6.022V63.098A6.029 6.029 0 0 1 95 57.076h158.175a6.029 6.029 0 0 1 6.022 6.022Z"
      fill="#3f3d56"
    />
    <Path
      d="M211.022 73.938h-73.869a3.617 3.617 0 0 1-3.613-3.613V52.661a3.617 3.617 0 0 1 3.613-3.613h73.869a3.617 3.617 0 0 1 3.613 3.613v17.664a3.617 3.617 0 0 1-3.613 3.613Z"
      fill="#ff6e4d"
    />
    <Path
      fill="#ff6e4d"
      d="M182.117 42.223a8.029 8.029 0 0 1-8.029 8.029 8.029 8.029 0 0 1-8.03-8.029 8.029 8.029 0 0 1 16.059 0z"
    />
    <Path
      fill="#353d56"
      d="M178.978 42.223a4.891 4.891 0 0 1-4.89 4.891 4.891 4.891 0 0 1-4.891-4.891 4.891 4.891 0 0 1 9.781 0z"
    />
  </Svg>
);

export default EmptyFeedDark;
