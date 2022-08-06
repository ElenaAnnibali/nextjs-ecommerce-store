import Cookies from 'js-cookie';

export type CartItem = {
  id: number;
  quantity: number;
};

export function getParsedCookie(key: string) {
  const cookieValue = Cookies.get(key);

  if (!cookieValue) {
    return [];
  }

  try {
    return JSON.parse(cookieValue);
  } catch (err) {
    return [];
  }
}

export function setStringifiedCookie(key: string, value: CartItem[]) {
  Cookies.set(key, JSON.stringify(value));
}

export function deleteCookie(key: string) {
  Cookies.remove(key);
}
