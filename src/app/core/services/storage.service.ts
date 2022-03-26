import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  getValue(key: string): string {
    return localStorage.getItem(key) || '';
  }

  setValue(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  removeValue(key: string) {
    localStorage.removeItem(key);
  }
}
