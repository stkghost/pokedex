export interface IPokemonProps {
  base_experience: number;
  abilities: IAbilitiesProps[];
  stats: IStatsProps[];
  types: ITypeProps[];
  sprites: ISpritesProps;
  forms: {
    name: string;
  }[];
  height: number;
  id: number;
  is_default: boolean;
  name: string;
  order: number;
  weight: number;
}

export interface IAbilitiesProps {
  slot: number;
  is_hidden: boolean;
  ability: {
    name: string;
    url: string;
  };
}

export interface IStatsProps {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
}

export interface ITypeProps {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface ISpritesProps {
  other: {
    official_artwork: {
      front_default: string;
    };
  };
}
