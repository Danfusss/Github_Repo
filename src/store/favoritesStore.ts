import { action, makeAutoObservable } from "mobx";
import { Repository } from "../type";

class FavoritesStore {
  favorites: Array<Repository> = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action
  addFavorite(repo: Repository) {
    if (!this.favorites.some((favorite) => favorite.id === repo.id)) {
      this.favorites.push(repo);
    }
  }

  @action
  getFavoriteById(current: string): Repository | undefined {
    return this.favorites.find(
      (favorite) => favorite.id.toString() === current
    );
  }
}

export const favoritesStore = new FavoritesStore();
