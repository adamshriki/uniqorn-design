const BASE_PATH = process.env.NODE_ENV === "production" ? "/uniqorn-design" : "";

export function img(path: string) {
  return `${BASE_PATH}${path}`;
}
