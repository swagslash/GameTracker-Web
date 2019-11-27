import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  setItem<T>(key: string, item: T): void {
    const itemString = JSON.stringify(item);

    localStorage.setItem(key, itemString);
  }

  getItem<T>(key: string): T | undefined {
    const itemString = localStorage.getItem(key);

    if (!itemString) {
      return undefined;
    }

    return JSON.parse(itemString);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
