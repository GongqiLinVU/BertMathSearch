import { createContext } from "react";
import { action, observable } from "mobx";

export class RootStore {
  @observable qnaResult = {};
  @action setQnAResult = (hits) => (this.qnaResult = hits);
  loading = observable.box(false);
  @observable searchOption = 1;
}

export const RootStoreContext = createContext(new RootStore());
