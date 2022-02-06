export class Quote {
  public showDescription: boolean;
  constructor(public quote: string,public author: string,public movie: any,public submitter: string, public votes: number){
    this.showDescription=false;

  }
  /*quote!: string;
  author!: string;
  movie!: any;
  submitter!: string;*/
}
