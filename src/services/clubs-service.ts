import * as HttpResponse from "../utils/http-helper";
import * as repository from "../repositories/clubs-repositorys"
export const getClubService = async () => {
    
    const data = await repository.findAllClubs()
    const response = HttpResponse.ok(data);

    return response;
} 
