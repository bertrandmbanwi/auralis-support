export type SyntalumeThemeName =
  | 'Auralis Noir'
  | 'Auralis Frost'
  | 'Auralis Paper'
  | 'Auralis Botanica'
  | 'Auralis Noir High Contrast'
  | 'Auralis Frost Colorblind'
  | 'Auralis Paper High Contrast'
  | 'Auralis Dimmed'
  | 'Auralis Void';

export interface PaletteIndexEntry {
  file: string;
  type: 'dark' | 'light';
  editorBackground: string;
  editorForeground: string;
  accent: string;
  terminal: Record<string, string>;
}

export interface IconAssociationData {
  $schema: string;
  schemaVersion: 1;
  family: 'balanced';
  fileExtensions: Record<string, string>;
  fileNames: Record<string, string>;
  folderNames: Record<string, string>;
  rootFolderNames: Record<string, string>;
  languageIds: Record<string, string>;
}

export const schemaVersion: 1;
export const packageVersion: string;
export const themes: Record<SyntalumeThemeName, PaletteIndexEntry>;
export const iconAssociations: {
  file: string;
  definitions: number;
  fileExtensions: number;
  fileNames: number;
  folderNames: number;
  rootFolderNames: number;
  languageIds: number;
};
export function themePath(name: SyntalumeThemeName): string;
export function loadTheme(name: SyntalumeThemeName): Record<string, unknown>;
export function loadIconAssociations(): IconAssociationData;
