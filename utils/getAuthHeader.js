// @flow
import cookie from 'js-cookie';

export default function getAuthHeader() {
  const token: any = cookie.get('token') ? cookie.get('token') : '';

  const context: { [key: string]: any } = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  return context;
}
