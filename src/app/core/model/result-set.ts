export class ResultSet<T> {
  content: Array<T>;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  first: boolean;
  sort: any;
  numberOfElements: number;
}
