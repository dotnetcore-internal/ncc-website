export class PeopleKey {
  id: string = "";
  name: string = "";
  avatar: string = "";
}

export class PmcPeople extends PeopleKey {
  director: boolean = false;
  "during-in-term": boolean = false;
}

export class PmcPeopleList {
  people: PmcPeople[] = [];
}