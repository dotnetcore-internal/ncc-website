export interface Article {
  id: string,
  title: string,
  date: string,
  img: string,
  url?: string,
}

export interface hasAuthor {
  author?: AuthorModel | AuthorModel[]| AuthorExtendModel | AuthorExtendModel[];
}

export interface hasDescription {
  description?: string;
}

export interface NewsIndexModel extends Article, hasAuthor, hasDescription {
}

export interface AnnouncementIndexModel extends Article, hasAuthor, hasDescription {
}

export interface WeeklyIndexModel extends Article, hasAuthor, hasDescription {
}

export interface StoryIndexModel extends Article, hasAuthor, hasDescription {
}

export interface AuthorModel {
  id: string,
  name: string,
  avatar: string,
  url?: string
}

export interface AuthorExtendModel extends AuthorModel {
  groups: string[];
}

export interface PageDescriptor {
  current: number,
  total: number,
  name?: string,
  nameSeries?: string[]
}

const hasAuthors = (model: AuthorModel | AuthorModel[] | AuthorExtendModel | AuthorExtendModel[]| null) => {
  if (!model) return false;
  if (Array.isArray(model)) return model.length > 0;
  return true;
};

const getAuthors = (model: AuthorModel | AuthorModel[] | AuthorExtendModel | AuthorExtendModel[]| null): AuthorModel[] => {
  if (!model) return [];
  if (Array.isArray(model)) return model;
  return [model];
};

const countAuthors = (model: AuthorModel | AuthorModel[]| AuthorExtendModel | AuthorExtendModel[] | null): number => {
  return getAuthors(model).length;
};

const isExtendAuthor = (model: AuthorModel | AuthorExtendModel): boolean => {
  return (model as AuthorExtendModel)?.groups !== undefined;
}

const filterExtendAuthors = (model: AuthorModel | AuthorModel[] | AuthorExtendModel | AuthorExtendModel[] | null): AuthorExtendModel[] => {
  if (!model) return [];
  if (Array.isArray(model)) {
    const ret: AuthorExtendModel[] = [];
    for (const m of model) {
      if (isExtendAuthor(m))
        ret.push(m as AuthorExtendModel);
    }
    return ret;
  } else {
    if (isExtendAuthor(model))
      return [model as AuthorExtendModel]
    return [];
  }
}

const filterExtendAuthorsByGroup = (model: AuthorModel | AuthorModel[] | AuthorExtendModel | AuthorExtendModel[] | null, group: string): AuthorExtendModel[] => {
  const ret: AuthorExtendModel[] = [];
  const authors = filterExtendAuthors(model);
  for (const author of authors) {
    if (author.groups.includes(group))
      ret.push(author);
  }
  return ret;
}


export {
  hasAuthors,
  getAuthors,
  countAuthors,
  isExtendAuthor,
  filterExtendAuthors,
  filterExtendAuthorsByGroup,
};