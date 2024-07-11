import IUser from '@domain/role/IUser';

export default interface IPlanIdAndIdRequest {
  user: IUser;
  id: string;
  planId: string;
}