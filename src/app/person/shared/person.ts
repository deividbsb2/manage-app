import { Profile } from './profile';
import { App } from '../../apps/shared/app';

export class Person {
    id: number;
    name: string;
    cpf: number;
    rg: string;
    profile: Profile;
    profile_id: number;
    apps?: App[];
    created_at?: string;
    updated_at?: string;
}
