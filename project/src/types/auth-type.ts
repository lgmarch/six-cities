export type AuthType = {
  email: string;
  password: string;
};

export type AuthInfoType = {
  avatarUrl: string,
  email: string,
  id: number,
  isPro: boolean,
  name: string,
};

export type AuthInfoTypeBackend = {
  'avatar_url': string,
  'email': string,
  'id': number,
  'is_pro': boolean,
  'name': string,
  'token': string,
}
