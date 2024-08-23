import { PlayerModel } from "../models/player-model";
import * as PlayerRepostory from "../repositories/players-repository";
import { StatisticsModel } from "../models/statistics-model";
import * as validation from "./validation-service";



export const getPlayerService = async ()=> {
    const data = await PlayerRepostory.findAllPlayers();
    return await validation.isNotEmpty(data);
}
export const getPlayerByIdService = async (id:number) => {
    const data = await PlayerRepostory.findPlayersById(id);
    return validation.isNotEmpty(data)
}
export const createPlayerService = async (player: PlayerModel) => {
    return await validation.ObjectIsNotEmpty(player, "create");
} 
export const deletePlayerByIdService = async (id: number) => {  
    const isDeleted = await PlayerRepostory.deleteOnePlayer(id);
    return await validation.isDeleted(isDeleted);
}
export const uptadePlayerService = async(id: number, statistics: StatisticsModel) => {
        const data = await PlayerRepostory.findAndModifyPlayer (id, statistics);
        return await validation.ObjectIsNotEmpty(data, "uptade")
        };


/**
 * Quem tem que decidir o tipo de dado que deverá retornar é o service
 * tem que fazer o tratamento de dados para o recebimento adequado 
 * Verificação e validação de dados é responsável pelas regras de negõcios 
 */