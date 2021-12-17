// 타입 정의 파일
// TS가 인식하지 못하는 타입이나, 사용 할 수 없는 타입들을 정의할 때 사용하는 곳

declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}
