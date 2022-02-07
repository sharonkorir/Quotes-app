export class Quote {
  public showDescription: boolean;
  constructor(public quote: string,public author: string, public submitter: string, public likes: number, public dislikes: number, public postDate: Date){
    this.showDescription=false;

  }
  /*quote!: string;
  author!: string;
  movie!: any;
  submitter!: string;*/
}
