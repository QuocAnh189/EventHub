export const isNullOrEmpty: (str: string | null | undefined) => boolean = (str) => {
  return str === null || str === undefined || str === ''
}
