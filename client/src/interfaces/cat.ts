export interface CatResponse {
    id: string;
    url: string;
    width: number;
    height: number;
    breeds: any[];
    categories?: Array<{
        id: number;
        name: string;
    }>;
}