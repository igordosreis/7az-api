import IUser from '@domain/role/IUser';

export default interface IPlanIdRequest {
  user: IUser;
  planId: string;
}