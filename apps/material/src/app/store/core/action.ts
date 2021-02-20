import { createAction } from "@reduxjs/toolkit";

export const clearCacheBase = createAction('[CORE/STIORE] Clear Store Cache')

export const clearCache = () => {
    return clearCacheBase()
}