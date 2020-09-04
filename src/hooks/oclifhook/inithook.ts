import { Command, Hook } from '@oclif/config';

// tslint:disable-next-line: no-any
type HookFunction = (this: Hook.Context, options: HookOptions) => any;

type HookOptions = {
    Command: Command.Class;
    argv: string[];
    commandId: string;
    id: string;
  };

export const hook: HookFunction = async options => {
    console.log('init Hook Running for command ' + options.id);
    console.log('init Hook Running for command arguments' + options.argv);
};
