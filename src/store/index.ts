import DeviceStore from "./Device";
import UserStore from "./User";

export type TypeStore = {
  user: UserStore,
  device: DeviceStore
};
  
export const store = {
  user: new UserStore(),
  device: new DeviceStore()
};