import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';
import { IncomingHttpHeaders } from 'http';

@Injectable()
class ValidateAdmin {
  constructor(private readonly _httpService: HttpService) {}

  validate = async (headers: IncomingHttpHeaders): Promise<void> => {
    const url = `${process.env.GLOBAL_API_URL}/microservices/validations/user`;
    const body = { token: headers.authorization };
    const config: AxiosRequestConfig = {
      headers: { 
        Authorization: process.env.TOKEN, 
      }, 
    };
    
    try {
      await this._httpService.axiosRef.post(url, body, config);
    } catch {
      throw new Error();
    }
  };
}

export default ValidateAdmin;
