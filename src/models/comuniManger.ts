import { data } from "@/comuni"

export interface ComuniSelectOptions {
    label: string;
    value: string;
}

export class ComuniManager {

    comuniList: Comune[];
    codeMap: Map<string, string>;

    constructor() {
        this.codeMap = new Map<string, string>();
        this.comuniList = data.map(comuneData => {
            this.codeMap.set(comuneData["CODICE ISTAT"], comuneData["CODICE BELFIORE"]
            )
            return new Comune(
                comuneData["NR."],
                comuneData["DESCRIZIONE COMUNE"],
                comuneData["SIGLA"],
                comuneData["CODICE ELETTORALE"],
                comuneData["CODICE ISTAT"],
                comuneData["CODICE BELFIORE"]
            );
        });
    }

    public getSelectOptionList(): ComuniSelectOptions[] {
        return this.comuniList.map((comune: Comune) => {
            return {
                label: comune.description + " (" + comune.codiceIstat + ")",
                value: comune.codiceBelfiore
            }
        })
    }

    public getCodiceBelfiore(comune: string): string | undefined {
        return this.codeMap.get(comune);
    }
}


export class Comune {

    number: string;
    description: string;
    sigla: string;
    codiceElettorale: string;
    codiceIstat: string;
    codiceBelfiore: string;

    constructor(number: string, description: string, sigla: string, codiceElettorale: string,
        codiceIstat: string, codiceBelfiore: string) {
        this.number = number;
        this.description = description;
        this.sigla = sigla;
        this.codiceBelfiore = codiceBelfiore;
        this.codiceElettorale = codiceElettorale;
        this.codiceIstat = codiceIstat;

    }
}