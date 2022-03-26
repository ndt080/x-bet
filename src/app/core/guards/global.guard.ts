import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { UserStorageService } from "@services/user-storage.service";
import { NavigationPath } from "@core/consts";

@Injectable({
  providedIn: 'root',
})
export class GlobalGuard implements CanActivate {
  constructor(private userStorageService: UserStorageService, private router: Router) {}

  canActivate() {
    if (this.userStorageService.hasUser) return true;

    this.router.navigate([`/${NavigationPath.SIGN_IN}`]);
    return false;
  }
}
