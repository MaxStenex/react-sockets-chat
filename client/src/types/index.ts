export type SearchPanelHeaderProps = {
  title: string;
  buttons?: React.ReactElement;
  input: React.ReactElement;
};

export type SearchPanelProps = SearchPanelHeaderProps & {
  main: React.ReactElement;
};

export enum OptionsTypes {
  DEFAULT = "DEFAULT",
  DANGER = "DANGER",
}

export type LoginValuesType = {
  email: string;
  password: string;
};

export type RegisterValuesType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
