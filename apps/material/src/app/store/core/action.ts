import { createAction } from '@reduxjs/toolkit';

export const clearCacheBase = createAction('[CORE/STIORE] Clear Store Cache');

export const logout = createAction('[CORE/Logout]')

export const clearCache = () => {
  return clearCacheBase();
};
