import { createSelector } from 'reselect';
import _ from 'lodash';

import { NAME } from './constants';
import { filterShorted } from './model';

export const getAllInfo = state => state[NAME];
// _.compose

export const getShortedInfo = createSelector(
  [ getAllInfo ],
  filterShorted
);