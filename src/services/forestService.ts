import * as forestDal from "../db/dal/forest";
import {
  Forest,
  ForestAttributes,
  partialInputForestAttributes,
} from "../db/models/Forest";

export const create = (payload: ForestAttributes): Promise<Forest> => {
  return forestDal.create(payload);
};
export const update = (
  stand_id: number,
  payload: partialInputForestAttributes
): Promise<Forest> => {
  return forestDal.update(stand_id, payload);
};
export const getById = (stand_id: number): Promise<Forest> => {
  return forestDal.getById(stand_id);
};
export const deleteById = (stand_id: number): Promise<boolean> => {
  return forestDal.deleteById(stand_id);
};
export const getAll = (): Promise<Forest[]> => {
  return forestDal.getAll();
};
