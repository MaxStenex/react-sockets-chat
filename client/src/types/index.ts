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

export enum FriendshipTypes {
  ACCEPTED = "accepted",
  REQUESTED = "requested",
}

export type FriendshipType = {
  id: number;
  status: FriendshipTypes;
  user: { id: number; firstName: string; lastName: string };
};

export type MessageType = {
  id: number;
  senderId: number;
  accepterId: number;
  text: string;
  createdAt: string;
};
