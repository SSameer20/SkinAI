export enum Screen {
  SMALL = 480,
  MEDIUM = 780,
  LARGE = 1400,
}

export const userLoginStatus = (): boolean => {
  const token = localStorage.getItem("token");
  if (!token) return false;
  return true;
};
