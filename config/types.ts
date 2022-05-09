// ============================ POST ============================

export interface getPost {
  data: Post;
}
export interface getPostResults {
  data: Post[];
}
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// ============================ USER ============================

export interface getUserResults {
  data: User[];
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
