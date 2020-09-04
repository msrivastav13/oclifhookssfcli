import { Command, Hook } from '@oclif/config';

// tslint:disable-next-line: no-any
type HookFunction = (this: Hook.Context, options: HookOptions) => any;

type HookOptions = {
    Command: Command.Class;
    argv: string[];
    result?: object
  };

export const hook: HookFunction = async options => {
    console.log('post Hook Running for command results' + options.result);
    console.log('post Hook Running for command arguments' + options.argv);
};
