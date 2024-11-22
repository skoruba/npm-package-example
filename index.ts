const add = (...args: number[]): number => {
  return args.reduce((acc, val) => acc + val, 0);
};

export { add };
