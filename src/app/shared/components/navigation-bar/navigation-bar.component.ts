import { Component, Input, OnInit } from "@angular/core";
import { UserStorageService } from "@services/user-storage.service";
import { NavigationBarItem } from "@shared/components/navigation-bar/models/navigation-bar-item.model";
import { NavigationBarItems } from "@shared/components/navigation-bar/consts/navigation-bar-items.const";
import { Router } from "@angular/router";
import { NavigationPath } from "@core/consts";

@Component({
  selector: 'navigation-bar, [navigation-bar]',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  navbarItems: NavigationBarItem[] = [];
  dropdownItems: NavigationBarItem[] = [];
  isShowDropdown = false;

  get hasUser() {
    return this.userStorageService.hasUser;
  }

  constructor(private userStorageService: UserStorageService, private router: Router) {}

  ngOnInit() {
    NavigationBarItems.forEach(item => {
      item.isDropdown ? this.dropdownItems.push(item) : this.navbarItems.push(item);
    })
  }

  onDropdownControlClick() {
    this.isShowDropdown = !this.isShowDropdown;
  }

  onLogoClick() {
    this.router.navigate([`/${NavigationPath.HOME}`]);
  }
}
