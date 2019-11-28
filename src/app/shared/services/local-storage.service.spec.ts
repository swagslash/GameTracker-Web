import {LocalStorageService} from './local-storage.service';

describe('LocalStorageService', () => {
  let storageService: LocalStorageService;

  beforeEach(() => {
    storageService = new LocalStorageService();

    const store = {};
    const mockLocalStorage = {
      getItem: (key: string) => {
        return key in store ? store[key] : undefined;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
    };

    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
  });

  it('should get undefined if an item does not exist in the store', () => {
    // given
    const key = 'item';

    // when
    const result = storageService.getItem(key);

    // then
    expect(result).toBe(undefined);
  });

  it('should store an item', () => {
    // given
    const key = 'item';
    const item = {
      test: 'test',
    };

    // when
    storageService.setItem(key, item);

    // then
    const result = storageService.getItem(key);
    expect(result).toEqual(item);
  });

  it('should remove a stored item', () => {
    // given
    const key = 'item';
    const item = {
      test: 'test',
    };
    storageService.setItem(key, item);

    // when
    storageService.removeItem(key);

    // then
    const result = storageService.getItem(key);
    expect(result).toBe(undefined);
  });
});
