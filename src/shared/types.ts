export interface CategoryType {
  id: string;
  title: string;
  sort: number;
}

export interface ArticleType {
  id: string;
  title: string;
  updated_at: string;
  created_at: string;
  author_id: string;
  category_id: string;
  annotation: string;
  slug: string;
  image: string;
  visited: number;
  is_published: boolean;
  is_leader: boolean;
  editors_choice: boolean;
  locale: string;
  tags: TagType[];
  category: CategoryType;
  author: AuthorType;
}

export interface TagType {
  id: string;
  name: string;
  locale: string;
  is_header: boolean;
  created_at: string;
  updated_at: string;
}

export interface AuthorType {
  id: string;
  name: string;
  description: string | null;
  image: string | null;
  created_at: string;
  updated_at: string;
}
