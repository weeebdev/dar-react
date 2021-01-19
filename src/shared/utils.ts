export const checkLikes = (count: number) => {
  return new Promise<string>((resolve, reject) => {
    if (count > 5 || count < 5) {
      reject('Like limit exceeded');
    }
    resolve('Like count changed');
  });
};
