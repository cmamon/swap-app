


export class ResearchService {
    properties = [];
    services = [];

    search(research: string) {
        this.properties.splice(0, this.properties.length);
        this.properties.push('( A recup dans la BD ) Les résultat de la recherche : ' + research);
        // Connexion et résultat du serveur normalement
    }

    getProperties() {
        return this.properties;
    }
}
