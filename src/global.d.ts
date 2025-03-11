import { routing } from "./lib/i18n/routing";

declare global {
  type Prettify<T> = { [K in keyof T]: T[K] } & {};

  type UnionToIntersection<T> = Prettify<
    (T extends any ? (x: T) => any : never) extends (x: infer R) => any ? R : never
  >;

  type CatchAllParam<T extends string> = T extends `...${infer U}` ? U : T;

  type ParamObject<T extends string> = {
    [K in T]: K extends `...${string}` ? string[] : string;
  };

  interface PageProps<TParams extends string = never, TSearchParams extends string = never> {
    params: Promise<Prettify<UnionToIntersection<ParamObject<TParams>> & { locale: string }>>;
    searchParams: Partial<Record<TSearchParams, string | string[]>>;
  }
}

export {};
