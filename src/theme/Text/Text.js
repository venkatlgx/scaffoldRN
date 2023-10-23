import React from 'react';
import { arrayOf, instanceOf, oneOf, oneOfType, string } from 'prop-types';
import { Text as RNText } from 'react-native';

import styles from './styles';

const H1 = 'H1';
const H2 = 'H2';
const H3 = 'H3';
const H4 = 'H4';
const P1 = 'P1';
const P2 = 'P2';
const P3 = 'P3';

export const typeShape = oneOf([H1, H2, H3, H4, P1, P2, P3]);

const Text = ({ children = '', as = P1, style, ...restProps }) => (
  <RNText style={[styles.base, styles[as], style]} {...restProps}>
    {children}
  </RNText>
);

Text.propTypes = {
  children: oneOfType([string, instanceOf(Text), instanceOf(RNText)]),
  as: typeShape,
  style: oneOfType([arrayOf(RNText.propTypes.style), RNText.propTypes.style]),
};

export default Text;
