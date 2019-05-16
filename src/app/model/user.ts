import { Role } from './role';

export interface User {
    id: string;
    name: string;
    username: string;
    email: string;
    roles: Array<Role>;
    token: string;
}