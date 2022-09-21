import { Forest, ForestAttributes } from "../models/Forest";

export const create = async (payload: ForestAttributes): Promise<Forest> => {
  const stand = await Forest.create(payload);
  return stand;
};

export const update = async (
  stand_id: number,
  payload: Partial<ForestAttributes>
) => {
  const stand = await Forest.findByPk(stand_id);
  if (!stand) {
    throw new Error(`Stand with id ${stand_id} not found`);
  }
  const updatedStand = await (stand as Forest).update(payload);
  return updatedStand;
};

export const getById = async (stand_id: number): Promise<Forest> => {
  console.log(stand_id);
  console.log(typeof stand_id);
  const stand = await Forest.findByPk(stand_id);
  if (!stand) {
    throw new Error(`Stand with id ${stand_id} not found`);
  }
  return stand;
};

export const deleteById = async (stand_id: number): Promise<boolean> => {
  const deletedStandCount = await Forest.destroy({
    where: { stand_id },
  });
  return !!deletedStandCount;
};

export const getAll = async (): Promise<Forest[]> => {
  return Forest.findAll({});
};
