interface OptionConfig {
  default?: any
  type?: any[]
}
export class Option {
  name: string = "";
  rawName: string;
  description: string;
  config: OptionConfig;
  constructor(name: string, description: string, config?: OptionConfig) {
    this.rawName = name;
    this.description = description;

    this.config = Object.assign({},config);

    const resolvedName = name.match(/--(\w+) [<[].+/)?.[1]
    if(resolvedName) this.name = resolvedName
  }
}

export type { OptionConfig };