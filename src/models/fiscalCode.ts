import { ComuniManager } from "./comuniManger";

// Struttura di base per il calcolo del Code fiscale
export class FiscalCodeCalculator {
    private firstname: string;
    private lastname: string;
    private birthDate: Date;
    private genre: 'M' | 'F' | null;
    private belfioriCode: string;

    constructor(firstname: string, lastname: string, birthDate: Date, genre: 'M' | 'F' | null, belfioriCode: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthDate = birthDate;
        this.genre = genre;
        this.belfioriCode = belfioriCode;
    }

    // Metodo per getre il Code fiscale
    public getFiscalCode(): string {
        let fiscalCode = "";

        // Calcolo delle lettere per lastname e firstname
        fiscalCode += this.getLettereLastname();
        fiscalCode += this.getLettereFirstname();

        // Calcolo della data di nascita e genre
        fiscalCode += this.getDataGenre();

        // Calcolo del Code del comune di nascita
        fiscalCode += this.getCodeComune();

        // Aggiungere qui il calcolo del carattere di controllo
        // fiscalCode += this.getCarattereControllo();
        fiscalCode += this.getCarattereControllo(fiscalCode);

        return fiscalCode;
    }

    private getLettereLastname(): string {
        return this.getConsonanti(this.lastname).concat(this.getVocali(this.lastname)).padEnd(3, 'X').substring(0, 3);
    }

    private getLettereFirstname(): string {
        let consonanti = this.getConsonanti(this.firstname);
        if (consonanti.length >= 4) {
            return consonanti.charAt(0) + consonanti.charAt(2) + consonanti.charAt(3);
        }
        return consonanti.concat(this.getVocali(this.firstname)).padEnd(3, 'X').substring(0, 3);
    }

    private getDataGenre(): string {
        const anno = this.birthDate.getFullYear().toString().substring(2);
        const mese = "ABCDEHLMPRST".charAt(this.birthDate.getMonth());
        const giorno = this.birthDate.getDate() + (this.genre === 'F' ? 40 : 0);
        return anno + mese + giorno.toString().padStart(2, '0');
    }

    private getCodeComune(): string {
        return this.belfioriCode || "XXXX";
    }

    private getConsonanti(str: string): string {
        return str.replace(/[^BCDFGHJKLMNPQRSTVWXYZ]/gi, '').toUpperCase();
    }

    private getVocali(str: string): string {
        return str.replace(/[^AEIOU]/gi, '').toUpperCase();
    }

    private getCarattereControllo(cfParziale: string): string {
        const setPari: Record<string, number> = { '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7, 'I': 8, 'J': 9, 'K': 10, 'L': 11, 'M': 12, 'N': 13, 'O': 14, 'P': 15, 'Q': 16, 'R': 17, 'S': 18, 'T': 19, 'U': 20, 'V': 21, 'W': 22, 'X': 23, 'Y': 24, 'Z': 25 };
        const setDispari: Record<string, number> = { '0': 1, '1': 0, '2': 5, '3': 7, '4': 9, '5': 13, '6': 15, '7': 17, '8': 19, '9': 21, 'A': 1, 'B': 0, 'C': 5, 'D': 7, 'E': 9, 'F': 13, 'G': 15, 'H': 17, 'I': 19, 'J': 21, 'K': 2, 'L': 4, 'M': 18, 'N': 20, 'O': 11, 'P': 3, 'Q': 6, 'R': 8, 'S': 12, 'T': 14, 'U': 16, 'V': 10, 'W': 22, 'X': 25, 'Y': 24, 'Z': 23 };

        let somma = 0;
        for (let i = 0; i < 15; i++) {
            somma += i % 2 === 0 ? setDispari[cfParziale[i]] : setPari[cfParziale[i]];
        }

        return String.fromCharCode(65 + (somma % 26));
    }
    // Aggiungere qui un metodo privato per il calcolo del carattere di controllo
    // private getCarattereControllo(): string {
    //     return "";
    // }
}