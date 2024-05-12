export type BlogPosts = {
  _type: 'blogPosts';
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
}