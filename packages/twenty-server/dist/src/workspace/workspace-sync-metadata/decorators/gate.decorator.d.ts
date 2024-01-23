import { GateDecoratorParams } from 'src/workspace/workspace-sync-metadata/interfaces/gate-decorator.interface';
export declare function Gate(metadata: GateDecoratorParams): (target: object, fieldKey?: string) => void;
