import { ClubModel } from "../models/club-model";
import fs from "fs/promises" 

export const findAllClubs = async (): Promise <ClubModel[]> => {
    const data = await  fs.readFile("./src/data/clubs.json", "utf-8") 
    const clubs: ClubModel [] = JSON.parse(data)
    return clubs;
}

/**
 * Receives a different data source than Players! | Recebe uma fonte de dados diferente de Players
 * 
 * 
 */