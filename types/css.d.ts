import * as CSS from 'csstype'

declare module 'csstype' {
  interface Properties {
    '--initial-rotate'?: string
    '--default-rotate'?: string
  }
}
