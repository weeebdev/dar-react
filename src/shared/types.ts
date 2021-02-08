export interface ICategory {
  id: string;
  title: string;
  sort: number;
}

export interface IArticle {
  id: string;
  title: string;
  updated_at: string;
  created_at: string;
  author_id: string;
  category_id: string;
  annotation: string;
  description: string;
  slug: string;
  image: string;
  visited: number;
  is_published: boolean;
  is_leader: boolean;
  editors_choice: boolean;
  locale: string;
  tags: ITag[];
  category: ICategory;
  author: IAuthor;
}

export interface ITag {
  id: string;
  name: string;
  locale: string;
  is_header: boolean;
  created_at: string;
  updated_at: string;
}

export interface IAuthor {
  id: string;
  name: string;
  description: string | null;
  image: string | null;
  created_at: string;
  updated_at: string;
}

export interface IProfile {
  username: string;
  firstname: string;
  lastname: string;
  avatar: string;
}

export interface ILogin {
  username: string;
  password: string;
}

export type IRegister = IProfile & ILogin;
