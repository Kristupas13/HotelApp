export class Room {
    constructor(rating?: number) {
        this.rating = rating;
    }
    
    public id: number;
    public title: string;
    public description: string;
    public reservationPrice: number;
    public fullPrice: number;
    public available: string;
    public rating: number;
}
