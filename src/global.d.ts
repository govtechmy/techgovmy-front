declare global {
  type Prettify<T> = { [K in keyof T]: T[K] } & {};

  type UnionToIntersection<T> = Prettify<
    (T extends any ? (x: T) => any : never) extends (x: infer R) => any ? R : never
  >;

  type CatchAllParam<T extends string> = T extends `...${infer U}` ? U : T;

  type ParamObject<T extends string> = {
    [K in T]: K extends `...${string}` ? string[] : string;
  };

  // For Server Components
  interface ServerPageProps<TParams extends string = never, TSearchParams extends string = never> {
    params: Promise<Prettify<UnionToIntersection<ParamObject<TParams>> & { locale: string }>>;
    searchParams: Promise<Partial<Record<TSearchParams, string | string[]>>>;
  }

  // For Client Components
  interface ClientPageProps<TParams extends string = never, TSearchParams extends string = never> {
    params: Prettify<UnionToIntersection<ParamObject<TParams>> & { locale: string }>;
    searchParams: Partial<Record<TSearchParams, string | string[]>>;
  }
}

export {};
