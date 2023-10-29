import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { ISvgProps } from '../../global';

const CogDark = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 19.899 19.896" {...props}>
    <G data-name="Layer 2">
      <G data-name="Layer 1">
        <Path
          data-name="Path 119"
          d="M19.818 9.756a7.084 7.084 0 0 0-4.449-2.053 7.107 7.107 0 0 0 1.7-4.6.267.267 0 0 0-.267-.267 7.107 7.107 0 0 0-4.6 1.7A7.163 7.163 0 0 0 10.14.074a.279.279 0 0 0-.378 0 7.087 7.087 0 0 0-2.061 4.453 7.1 7.1 0 0 0-4.6-1.7.267.267 0 0 0-.267.267 7.107 7.107 0 0 0 1.7 4.6A7.08 7.08 0 0 0 .08 9.76a.259.259 0 0 0 0 .374 7.091 7.091 0 0 0 4.449 2.062 7.115 7.115 0 0 0-1.691 4.6.267.267 0 0 0 .267.267 7.1 7.1 0 0 0 4.6-1.7 7.08 7.08 0 0 0 2.057 4.453.263.263 0 0 0 .187.08.279.279 0 0 0 .2-.08 7.135 7.135 0 0 0 2.052-4.453 7.107 7.107 0 0 0 4.6 1.7.267.267 0 0 0 .267-.267 7.1 7.1 0 0 0-1.7-4.6 7.091 7.091 0 0 0 4.445-2.057.263.263 0 0 0 0-.378Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);

export default CogDark;
