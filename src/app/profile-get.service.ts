import { Injectable } from '@angular/core';
import { BackendGetService } from './BackendGetService';
import { User } from './profiles/profile/User';

@Injectable()
export class ProfileGetService extends BackendGetService<User> {
  public url = 'https://thekalecartelwebapi.azurewebsites.net/api/kaleprofile/';
}
