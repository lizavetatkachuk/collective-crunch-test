import {
  Forest,
  ForestAttributes,
  partialInputForestAttributes,
} from "../db/models/Forest";
import * as service from "../services/forestService";

export const create = async (payload: ForestAttributes): Promise<Forest> => {
  return await service.create(payload);
};
export const update = async (
  stand_id: number,
  payload: partialInputForestAttributes
): Promise<Forest> => {
  return await service.update(stand_id, payload);
};
export const getById = async (stand_id: number): Promise<Forest> => {
  return await service.getById(stand_id);
};
export const deleteById = async (stand_id: number): Promise<Boolean> => {
  const isDeleted = await service.deleteById(stand_id);
  return isDeleted;
};
export const getAll = async (): Promise<Forest[]> => {
  return await service.getAll();
};
