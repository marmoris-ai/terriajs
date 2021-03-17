import {
  ICompositeBarItem,
  CompositeBarModel
} from "../CompositeBar/CompositeBarModel";
import MapNavigationItemController from "./MapNavigationItemController";

export const OVERFLOW_ITEM_ID = "overflow-item";
export type NavigationItemLocation = "TOP" | "BOTTOM";

export interface IMapNavigationItem
  extends ICompositeBarItem<MapNavigationItemController> {
  location: NavigationItemLocation;
  render?: React.ReactNode;
}

export default class MapNavigationModel extends CompositeBarModel<
  IMapNavigationItem
> {
  protected createCompositeBarItem(
    item: IMapNavigationItem
  ): IMapNavigationItem {
    return item;
  }
}
