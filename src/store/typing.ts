export {}
// 为了给sotre上挂在变量时候提供ts类型
declare module 'pinia' {
  export interface PiniaCustomStateProperties {
    name: string
  }
}
