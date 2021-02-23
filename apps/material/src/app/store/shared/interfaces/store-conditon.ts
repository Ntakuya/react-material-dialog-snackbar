export const StoreCondition = {
    Loading: 'LOADING',
    Idle: 'IDLE',
    Rejected: 'REJECTED'
  } as const
  
  export type StoreCondition = typeof StoreCondition[keyof typeof StoreCondition]