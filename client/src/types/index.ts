export type SearchPanelHeaderProps = {
  title: string;
  buttons?: React.ReactElement;
  input: React.ReactElement;
};

export type SearchPanelProps = SearchPanelHeaderProps & {
  main: React.ReactElement;
};
