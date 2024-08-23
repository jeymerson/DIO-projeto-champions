import { PlayerModel } from "../models/player-model";
import * as HttpResponse from "../utils/http-helper";
import * as PlayerRepostory from "../repositories/players-repository";


export const isNotEmpty = async(
    data:PlayerModel[] | PlayerModel | undefined
) => {
    let response = null;
    if(data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }
    return response;
}
export const ObjectIsNotEmpty = async(
    data: PlayerModel, Type: String 
) => {
    let response = null;

    if(Object.keys(data).length !== 0 && Type == "create") {
        await PlayerRepostory.insertPlayer(data);
        response = await HttpResponse.created();

    } else if (Object.keys(data).length !== 0 && Type == "uptade") {
        response = await HttpResponse.ok(data);
        
    } else if (Object.keys(data).length === 0) {
        response = await HttpResponse.badRequest();
    } else {
         response = await HttpResponse.badRequest();
        }
    return response;
}
export const isDeleted = async(result: Boolean) => {
    console.log(result);
    if(result){
        return await HttpResponse.ok({message: "deleted"});
    } else {
        return HttpResponse.badRequest();
    }   

}

/**
 * Layer responsible for data validation of the Player layer
 */