import { Injectable } from "@angular/core";
import { StorageService } from "@services/storage.service";
import { User } from "@core/models";
import { StorageKey } from "@core/consts";

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {
  constructor(private storageService: StorageService) {}

  get hasUser(): boolean {
    return !!this.getUser() && !!Object.keys(this.getUser()).length;
  }

  getUser(): User {
    try {
      const userString = this.storageService.getValue(StorageKey.USER);
      return JSON.parse(userString);
    } catch (e) {
      return <User>{};
    }
  }

  saveUser(user: User) {
    this.storageService.setValue(StorageKey.USER, JSON.stringify(user));
  }

  removeUser() {
    this.storageService.removeValue(StorageKey.USER);
  }
}
