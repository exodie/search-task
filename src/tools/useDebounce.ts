export const useDebounce = (cb: () => Promise<void>, ms: number) => {
  let timeout: number;

  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(async () => {
      await cb();
    }, ms);
  };
};
