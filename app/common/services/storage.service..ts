import { Injectable } from '@angular/core';
import { LocalStorageService, ILocalStorageServiceConfig } from 'angular-2-local-storage';





@Injectable()
export class StorageService {


  constructor(private localStorageService: LocalStorageService) {

  }

  addToList<TEntity>(key: LocalStorageEnum, obj: TEntity): void {
    // var type: string = (<any>obj).constructor.name;
    var list = this.localStorageService.get<TEntity[]>(LocalStorageEnum[key]);
    if (list == null) {
      var newList = new Array<any>();
      newList.push(obj);
      this.add(key, newList);
    } else {
      list.push(obj);
      this.add(key, list);
    }
  }
  add<TEntity>(key: LocalStorageEnum, obj: any): void {
    this.localStorageService.add(LocalStorageEnum[key], obj);
  }
  get<TEntity>(key: LocalStorageEnum): TEntity {
    return this.localStorageService.get<TEntity>(LocalStorageEnum[key]);
  }
  remove<TEntity>(key: LocalStorageEnum): void {
    this.localStorageService.remove(LocalStorageEnum[key]);
  }

}

export enum LocalStorageEnum {
  WordsList,
  Profile
}
