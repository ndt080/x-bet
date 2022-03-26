import { NavigationBarItem } from "@shared/components/navigation-bar/models/navigation-bar-item.model";
import { NavigationPath } from "@core/consts";

export const NavigationBarItems = [
  { isAuth: true, isDropdown: false, title: 'Races', link: `/${NavigationPath.RACES}` } as NavigationBarItem,
  { isAuth: true, isDropdown: true, title: 'Bets', link: `/${NavigationPath.RACES}` } as NavigationBarItem,

  { isAuth: false, isDropdown: false, title: 'Races', link: `/${NavigationPath.RACES}` } as NavigationBarItem,
  { isAuth: false, isDropdown: false, title: 'SignIn', link: `/${NavigationPath.SIGN_IN}` } as NavigationBarItem,
]
