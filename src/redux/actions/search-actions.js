import {SEARCH_HANDLER} from '../types'

export const searchHandler = e => {
  return {
    type: SEARCH_HANDLER,
    e: e
  };
};