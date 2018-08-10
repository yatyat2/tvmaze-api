import { types } from "mobx-state-tree";
import { observer } from "mobx-react";

const ShowInfo = types
  .model({
    name: "",
    genre: types.array(types.string)
  })
  .actions(self => {
    function setInfo(newName, newgenre) {
      self.name = newName;
      self.genre = newgenre;
    }

    return { setInfo };
  });

const RootStore = types
  .model({
    shows: types.optional(types.map(ShowInfo), {})
  })
  .actions(self => {
    function addShowInfo(id, name, genre) {
      self.shows.set(
        id,
        ShowInfo.create({
          name: name,
          genre: genre
        })
      );
    }

    return { addShowInfo };
  });

const store = RootStore.create({
  shows: {}
});

export default store;
